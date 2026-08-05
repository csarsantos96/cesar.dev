#!/usr/bin/env node
/**
 * Traduz src/lib/pt.json -> src/lib/en.json via Gemini API.
 * INCREMENTAL: so traduz strings novas ou alteradas. Reaproveita
 * traducoes existentes no en.json quando o texto PT nao mudou.
 * Preserva estrutura e chaves; traduz apenas valores string.
 * Campos em DO_NOT_TRANSLATE ficam identicos.
 *
 * Uso: GEMINI_API_KEY=... node scripts/translate.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '../src/lib/pt.json');
const OUT = join(__dirname, '../src/lib/en.json');
// snapshot do ultimo pt.json traduzido, para detectar o que mudou
const CACHE = join(__dirname, '../src/lib/.pt.cache.json');

const MODEL = 'gemini-2.5-flash';
const SOURCE_LANG = 'Portuguese (Brazil)';
const TARGET_LANG = 'English';

const DO_NOT_TRANSLATE = new Set([
  'company', 'date', 'name', 'type', 'repoUrl', 'liveUrl', 'stack', 'issuer', 'badge', 'year', 'url',
]);

async function readJsonOr(path, fallback) {
  try { return JSON.parse(await readFile(path, 'utf8')); }
  catch { return fallback; }
}

async function translateBatch(strings) {
  if (strings.length === 0) return [];
  const numbered = strings.map((s, i) => `${i}: ${s}`).join('\n');
  const prompt =
    `Translate each numbered line below from ${SOURCE_LANG} to ${TARGET_LANG}. ` +
    `Return ONLY a JSON array of translated strings in the same order - no keys, no markdown, no commentary. ` +
    `Keep it concise and natural for a developer portfolio. Preserve any leading markers like "// " or "\u2192 " ` +
    `exactly. Do not translate brand names, technology names, or proper nouns.\n\n` +
    numbered;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: 'application/json' },
    }),
  });
  if (!res.ok) throw new Error(`Gemini API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = (data.candidates?.[0]?.content?.parts ?? [])
    .map((p) => p.text ?? '').join('').replace(/```json|```/g, '').trim();
  const arr = JSON.parse(text);
  if (!Array.isArray(arr) || arr.length !== strings.length) {
    throw new Error(`Tamanho inesperado: esperava ${strings.length}, veio ${Array.isArray(arr) ? arr.length : 'nao-array'}`);
  }
  return arr;
}

// Coleta strings traduziveis; devolve esqueleto com {__ref} e o bag {path,value}.
function collect(node, bag, path = [], key = null) {
  if (typeof node === 'string') {
    if (key && DO_NOT_TRANSLATE.has(key)) return node;
    bag.push({ path: path.join('.'), value: node });
    return { __ref: bag.length - 1 };
  }
  if (Array.isArray(node)) return node.map((v, i) => collect(v, bag, [...path, i], key));
  if (node && typeof node === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(node)) out[k] = collect(v, bag, [...path, k], k);
    return out;
  }
  return node;
}

function rebuild(node, translated) {
  if (node && node.__ref !== undefined) return translated[node.__ref];
  if (Array.isArray(node)) return node.map((v) => rebuild(v, translated));
  if (node && typeof node === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(node)) out[k] = rebuild(v, translated);
    return out;
  }
  return node;
}

// Le um valor por caminho "a.b.0.c"
function getByPath(obj, path) {
  if (!obj || !path) return undefined;
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

const src = JSON.parse(await readFile(SRC, 'utf8'));
const prevPt = await readJsonOr(CACHE, null);   // pt.json da ultima traducao
const prevEn = await readJsonOr(OUT, null);      // en.json atual

const bag = [];
const skeleton = collect(src, bag);

// Decide o que traduzir: so o que e novo ou mudou desde a ultima vez.
const toTranslate = [];        // indices no bag que vao pra API
const reused = new Array(bag.length);

for (let i = 0; i < bag.length; i++) {
  const { path, value } = bag[i];
  const prevPtVal = getByPath(prevPt, path);
  const prevEnVal = getByPath(prevEn, path);
  if (prevPt && prevEn && prevPtVal === value && typeof prevEnVal === 'string') {
    reused[i] = prevEnVal;      // PT igual ao anterior -> reaproveita EN
  } else {
    toTranslate.push(i);        // novo ou alterado -> traduz
  }
}

let freshCount = 0;
if (toTranslate.length > 0) {
  const fresh = await translateBatch(toTranslate.map((i) => bag[i].value));
  toTranslate.forEach((i, k) => { reused[i] = fresh[k]; });
  freshCount = toTranslate.length;
}

const result = rebuild(skeleton, reused);
await writeFile(OUT, JSON.stringify(result, null, 2) + '\n');
await writeFile(CACHE, JSON.stringify(src, null, 2) + '\n');
console.log(`OK: ${freshCount} novas/alteradas traduzidas, ${bag.length - freshCount} reaproveitadas -> ${OUT}`);
