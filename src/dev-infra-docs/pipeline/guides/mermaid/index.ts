import {DocsCodeToken} from '../extensions/docs-code/docs-code';
import {chromium} from 'playwright-core';
import {Mermaid, MermaidConfig, RenderResult} from 'mermaid';
import path from 'path';

// Declare mermarid in the context of this file so that typescript doesn't get upset when we
// access it within the `page.evaluate` function. At runtime the context in with the method
// is run difference than this file, but this makes typescript happy.
declare const mermaid: Mermaid;

let mermaidScriptTagData: {path: string} | undefined;

function getMermaidScriptTagData() {
  if (mermaidScriptTagData) {
    return mermaidScriptTagData;
  }

  return (mermaidScriptTagData = {
    
    // path: runfiles.resolveWorkspaceRelative('node_modules/mermaid/dist/mermaid.js'),
    path: path.resolve( 'node_modules', 'mermaid', 'dist', 'mermaid.js'),
  });
}



// Configure o caminho para o script Mermaid.
// const mermaidScriptPath = path.resolve(__dirname, 'node_modules', 'mermaid', 'dist', 'mermaid.min.js');
// if (!fs.existsSync(mermaidScriptPath)) {
//   console.error('Mermaid script not found. Please make sure Mermaid is installed in node_modules.');
//   process.exit(1);
// }

/** Configuração Mermaid para ser usada ao criar SVGs. */
const mermaidConfig: MermaidConfig = {
  theme: 'base',
};

/** Browser instance to run mermaid within. */
async function processMermaidCodeBlock(token: DocsCodeToken) {
  const diagram = token.code; // Extraído antes de operações assíncronas.

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox'],
  });

  const page = await browser.newPage();

  try {
    await page.goto(`data:text/html,<html></html>`);
    await page.addScriptTag(getMermaidScriptTagData());

    // let { svg } = await page.evaluate(
    //   ({ diagram, config }) => {
    //     mermaid.initialize(config);
    //    return  mermaid.render('mermaid-generated-diagram', diagram)
    //   },
    //   { diagram, config: mermaidConfig }
    // );

    const svg = await page.evaluate(async (diagram) => {
      mermaid.initialize({ startOnLoad: true });
      const element = document.createElement('div');
      document.body.appendChild(element);
      // Agora usando a promessa diretamente sem callback
      const svgCode = await mermaid.render('mermaid-generated-diagram', diagram);
      element.innerHTML = svgCode.svg;
      return element.innerHTML;
    }, diagram);

    token.code = svg;
  } finally {
    await browser.close();
  }
}

export { processMermaidCodeBlock };
