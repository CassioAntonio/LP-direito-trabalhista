// Gera uma pasta 100% estática (static-site/) a partir do build,
// convertendo os caminhos absolutos em caminhos relativos.
// Uso: npm run build && node scripts/export-static.mjs
import { cp, readdir, readFile, rm, writeFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const src = join(root, "dist", "client");
const out = join(root, "static-site");

await stat(src).catch(() => {
  console.error('dist/client nao encontrado. Rode "npm run build" antes.');
  process.exit(1);
});

await rm(out, { recursive: true, force: true });
await cp(src, out, { recursive: true });

const TEXT = /\.(html|js|mjs|css|json|webmanifest)$/i;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(p)));
    else if (TEXT.test(e.name)) files.push(p);
  }
  return files;
}

for (const file of await walk(out)) {
  const inAssets = file.includes(`${join(out, "assets")}`);
  const prefix = inAssets ? "./" : "./assets/";
  const original = await readFile(file, "utf8");
  let next = original
    .replaceAll('"/assets/', `"${prefix}`)
    .replaceAll("'/assets/", `'${prefix}`)
    .replaceAll("(/assets/", `(${prefix}`)
    .replaceAll("`/assets/", `\`${prefix}`);
  if (!inAssets) {
    next = next.replaceAll('"/favicon.png"', '"./favicon.png"');
  } else {
    next = next.replaceAll('"/favicon.png"', '"../favicon.png"');
  }
  if (next !== original) await writeFile(file, next);
}

console.log(`Pasta estatica gerada em: ${out}`);
