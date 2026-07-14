import { cp, mkdir, readFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const request = JSON.parse(await readFile('demo-request.json', 'utf8'));
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(request.slug || '')) throw new Error('Slug inválido.');

const dist = resolve('.demo-builder/dist');
const html = await readFile(resolve(dist, 'index.html'), 'utf8');
if (!/noindex\s*,\s*nofollow/i.test(html)) throw new Error('A demonstração não contém noindex,nofollow.');

const assets = await readFile(resolve('.demo-builder/src/App.tsx'), 'utf8').catch(() => '');
if (!/DEMONSTRAÇÃO NÃO OFICIAL/i.test(`${html}\n${assets}`)) throw new Error('Aviso de demonstração ausente.');

const destination = resolve(request.slug);
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(dist, destination, { recursive: true });
