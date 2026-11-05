#!/usr/bin/env node
// Genera dist/.htaccess para publicar en Hostinger (Apache/LiteSpeed).
//
// El sitio se sirvió primero desde Vercel, que lee vercel.json. Hostinger no
// lo lee, así que las cabeceras de seguridad (CSP, HSTS, X-Frame-Options...)
// y las redirecciones se perdieron al mudarse. Este script las traduce a
// .htaccess usando vercel.json como única fuente: corre DESPUÉS de
// gen-csp-hashes.cjs, que ya dejó la CSP con los hashes actuales.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8'));

if (!fs.existsSync(DIST)) {
  console.error('[gen-htaccess] No existe dist/, corre "astro build" primero.');
  process.exit(1);
}

const global = (cfg.headers || []).find((h) => h.source === '/(.*)');
const headerLines = (global ? global.headers : []).map(
  // Las CSP solo usan comillas simples; las dobles se escapan por si acaso.
  (h) => `  Header always set ${h.key} "${String(h.value).replace(/"/g, '\\"')}"`
);

const htaccess = `# Generado por scripts/gen-htaccess.cjs a partir de vercel.json.
# NO editar a mano: se reescribe en cada build.

Options -Indexes
ErrorDocument 404 /404.html

<IfModule mod_rewrite.c>
  RewriteEngine On

  # www.brandup.cl -> brandup.cl (evita contenido duplicado en Google)
  RewriteCond %{HTTP_HOST} ^www\\.brandup\\.cl$ [NC]
  RewriteRule ^(.*)$ https://brandup.cl/$1 [R=301,L]

  # Artículo cuya dirección antigua llevaba "ñ"
  RewriteRule ^blog/cuando-conviene-redise[^n/]+ar-la-marca-de-tu-negocio/?$ /blog/cuando-conviene-redisenar-la-marca-de-tu-negocio/ [R=301,L]
</IfModule>

<IfModule mod_headers.c>
${headerLines.join('\n')}

  # Archivos de /_astro llevan un hash en el nombre: se pueden guardar un año.
  <If "%{REQUEST_URI} =~ m#^/_astro/#">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </If>
</IfModule>
`;

fs.writeFileSync(path.join(DIST, '.htaccess'), htaccess);
console.log(`[gen-htaccess] dist/.htaccess escrito con ${headerLines.length} cabeceras y 2 redirecciones.`);
