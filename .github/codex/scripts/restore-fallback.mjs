import { cp, rm } from 'node:fs/promises';

const paths = ['index.html', 'src', 'package.json', 'vite.config.ts', 'tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json'];
for (const path of paths) {
  await rm(`.demo-builder/${path}`, { recursive: true, force: true });
  await cp(`.demo-fallback/${path}`, `.demo-builder/${path}`, { recursive: true });
}
console.log('Provedor indisponível ou saída inválida; fallback local restaurado.');
