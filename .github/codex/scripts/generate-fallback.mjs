import { mkdir, readFile, writeFile } from 'node:fs/promises';

const request = JSON.parse(await readFile('demo-request.json', 'utf8'));
const text = (value, fallback = '') => typeof value === 'string' && value.trim() ? value.trim() : fallback;
const data = {
  empresa: text(request.empresa, 'Empresa local'),
  cidade: text(request.cidade, text(request.regiao, 'Sua região')),
  nicho: text(request.nicho, 'serviços especializados'),
  servico: text(request.servico),
};

await mkdir('.demo-builder/src', { recursive: true });

await writeFile('.demo-builder/index.html', `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex,nofollow" />
    <meta name="description" content="Demonstração não oficial de presença digital." />
    <title>${data.empresa.replace(/[<>&"']/g, '')} · Demonstração não oficial</title>
  </head>
  <body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body>
</html>`);

await writeFile('.demo-builder/tsconfig.app.json', JSON.stringify({
  compilerOptions: {
    target: 'ES2022', useDefineForClassFields: true, lib: ['ES2022', 'DOM', 'DOM.Iterable'],
    allowJs: false, skipLibCheck: true, esModuleInterop: true, allowSyntheticDefaultImports: true,
    strict: true, forceConsistentCasingInFileNames: true, module: 'ESNext', moduleResolution: 'Bundler',
    resolveJsonModule: true, isolatedModules: true, noEmit: true, jsx: 'react-jsx'
  },
  include: ['src']
}, null, 2));

await writeFile('.demo-builder/tsconfig.node.json', JSON.stringify({
  compilerOptions: { composite: true, skipLibCheck: true, module: 'ESNext', moduleResolution: 'Bundler', allowSyntheticDefaultImports: true },
  include: ['vite.config.ts']
}, null, 2));

await writeFile('.demo-builder/src/main.tsx', `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);`);

await writeFile('.demo-builder/src/App.tsx', `import { ArrowRight, Building2, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';

const data = ${JSON.stringify(data)} as const;

export default function App() {
  return <div className="site-shell">
    <div className="demo-bar" role="status"><ShieldCheck aria-hidden="true" /> DEMONSTRAÇÃO NÃO OFICIAL · canais de contato desativados</div>
    <header className="header"><a className="brand" href="#inicio" aria-label={data.empresa}><Building2 aria-hidden="true" /><span>{data.empresa}</span></a><span className="location"><MapPin aria-hidden="true" />{data.cidade}</span></header>
    <main id="inicio">
      <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="context">Uma nova presença digital para {data.cidade}</p><h1 id="hero-title">Confiança para encontrar a solução certa, com clareza desde o primeiro acesso.</h1><p className="lead">Conceito de site criado para apresentar {data.empresa} com uma experiência direta, acessível e preparada para dispositivos móveis.</p><button disabled type="button">Solicitar atendimento <ArrowRight aria-hidden="true" /></button><small>Recurso desativado nesta demonstração.</small></div><div className="hero-panel"><span>Atuação apresentada</span><strong>{data.nicho}</strong><p>{data.servico || 'Conteúdo comercial a confirmar com a empresa antes da publicação.'}</p></div></section>
      <section className="trust" aria-label="Diferenciais da demonstração"><article><CheckCircle2 aria-hidden="true" /><div><h2>Informação objetiva</h2><p>Estrutura pensada para que visitantes entendam rapidamente a proposta da empresa.</p></div></article><article><CheckCircle2 aria-hidden="true" /><div><h2>Experiência responsiva</h2><p>Navegação clara em celular, tablet e computador, com foco visível e contraste adequado.</p></div></article></section>
      <section className="closing"><div><p>Conceito digital</p><h2>Uma base profissional, pronta para receber conteúdo aprovado.</h2></div><button disabled type="button">Falar com a equipe</button></section>
    </main>
    <footer><strong>{data.empresa}</strong><span>DEMONSTRAÇÃO NÃO OFICIAL · Nenhum contato é realizado por esta página.</span></footer>
  </div>;
}`);

await writeFile('.demo-builder/src/index.css', `@import "tailwindcss";
:root{font-family:Inter,ui-sans-serif,system-ui,sans-serif;color:#172033;background:#f5f7fa;font-synthesis:none}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}button,a{font:inherit}.site-shell{min-height:100vh}.demo-bar{position:sticky;top:0;z-index:20;display:flex;gap:.5rem;align-items:center;justify-content:center;padding:.65rem 1rem;background:#172033;color:#fff;font-size:.75rem;font-weight:700;letter-spacing:.04em}.demo-bar svg,.location svg{width:1rem;height:1rem}.header{max-width:1180px;margin:auto;padding:1.25rem 2rem;display:flex;justify-content:space-between;align-items:center}.brand{display:flex;align-items:center;gap:.65rem;color:#172033;text-decoration:none;font-weight:800}.brand svg{color:#0f7b70}.location{display:flex;align-items:center;gap:.4rem;color:#526076;font-size:.875rem}.hero{max-width:1180px;margin:auto;padding:5rem 2rem 6rem;display:grid;grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr);gap:5rem;align-items:center}.context{color:#0f7b70;font-weight:750}.hero h1{max-width:18ch;margin:.8rem 0 1.25rem;font-size:clamp(2.4rem,5vw,4.7rem);line-height:1.02;letter-spacing:-.035em;text-wrap:balance}.lead{max-width:62ch;color:#526076;font-size:1.08rem;line-height:1.7}.hero button,.closing button{display:flex;align-items:center;gap:.5rem;margin-top:1.5rem;padding:.85rem 1.1rem;border:0;border-radius:.5rem;background:#172033;color:#fff;font-weight:700;opacity:.58}.hero button svg{width:1rem}.hero small{display:block;margin-top:.65rem;color:#667085}.hero-panel{padding:2rem;background:#0f7b70;color:#fff;border-radius:.75rem}.hero-panel span{font-size:.8rem;opacity:.8}.hero-panel strong{display:block;margin:.8rem 0;font-size:1.7rem}.hero-panel p{line-height:1.65;color:#d7f5ef}.trust{max-width:1180px;margin:auto;padding:0 2rem 5rem;display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:#d9e0e8}.trust article{display:flex;gap:1rem;padding:2rem;background:#fff}.trust svg{flex:0 0 auto;color:#0f7b70}.trust h2{margin:0 0 .5rem;font-size:1.05rem}.trust p{margin:0;color:#526076;line-height:1.6}.closing{display:flex;justify-content:space-between;align-items:end;gap:2rem;padding:4rem max(2rem,calc((100vw - 1116px)/2));background:#e8edf2}.closing p{color:#0f7b70;font-weight:700}.closing h2{max-width:22ch;margin:.5rem 0 0;font-size:2rem;line-height:1.15}.closing button{margin:0}footer{display:flex;justify-content:space-between;gap:2rem;padding:2rem max(2rem,calc((100vw - 1116px)/2));background:#fff;color:#526076;font-size:.8rem}footer strong{color:#172033}@media(max-width:760px){.header,.closing,footer{align-items:flex-start;flex-direction:column}.hero{grid-template-columns:1fr;gap:2.5rem;padding-top:3.5rem}.hero h1{font-size:2.6rem}.trust{grid-template-columns:1fr}.location{display:none}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}:focus-visible{outline:3px solid #18a999;outline-offset:3px}`);

console.log('Fallback local criado em .demo-builder.');
