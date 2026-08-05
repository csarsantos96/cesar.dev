export const config = {
  matcher: '/',
};

// ISO 3166-1 alpha-2 de países onde o português é língua oficial/nacional.
const LUSOPHONE_COUNTRIES = new Set([
  'PT', 'BR', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ',
]);

export default function middleware(request: Request) {
  const cookie = request.headers.get('cookie') ?? '';
  if (/(?:^|;\s*)lang=(pt|en)(?:;|$)/.test(cookie)) {
    return; // usuário já escolheu um idioma manualmente, respeita a escolha
  }

  const country = request.headers.get('x-vercel-ip-country');
  if (country && !LUSOPHONE_COUNTRIES.has(country)) {
    return Response.redirect(new URL('/en', request.url), 307);
  }
}
