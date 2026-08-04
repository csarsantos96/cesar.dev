# cesarsantos.dev — portfolio (Astro)

Migração fiel do portfolio React/Vite para **Astro** (SSG), mantendo o mesmo
visual (design de terminal, mesmas cores/fontes) e o mesmo conteúdo.
Idiomas: **PT** (em `/`) e **EN** (em `/en`). O alemão foi removido.

## Como rodar
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Estrutura
```
src/
  layouts/Base.astro       # monta a página inteira por idioma
  pages/
    index.astro            # PT  (/)
    en.astro               # EN  (/en)
    404.astro
  components/               # cada seção do portfolio (.astro + .css idêntico ao original)
    Navbar, Hero, HeroTerminal, About, Skills, Projects,
    Certifications, Resume, Contact, Footer, Icon
  lib/
    i18n.ts                # textos PT/EN (about, experiência, educação, etc.)
    data.ts                # dados que NÃO mudam entre idiomas (skills, certs, projetos)
  styles/global.css        # tokens e estilos globais (idêntico ao original)
public/image/avatar.jpeg   # PLACEHOLDER — troque pela sua foto real
```

## Traduções
- Textos que mudam de idioma → `src/lib/i18n.ts` (blocos `pt` e `en`).
- Nomes de tecnologias, certificações e empresas → `src/lib/data.ts` e ficam
  iguais nos dois idiomas, como no site original.

## Pendências antes de subir
- Trocar `public/image/avatar.jpeg` pela foto real (hoje é um placeholder 1x1).
- Colocar os CVs em `public/cv-pt.pdf` e `public/cv-en.pdf`.
- Ícones lucide/brand foram embutidos como SVG inline em `Icon.astro`
  (sem dependência de React), equivalentes aos usados no original.

## Ícones
`Icon.astro` traz os SVGs do lucide (e os de marca github/linkedin) inline.
Para adicionar um ícone novo, acrescente o path no objeto `paths` desse arquivo.
