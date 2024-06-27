/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {readFileSync,existsSync, mkdirSync,writeFileSync} from 'fs';
import path from 'path';
import {parseMarkdown} from './parse';

function ensureDirectoryExistence(filePath:string) {
  const dirname = path.dirname(filePath);
  if (existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  mkdirSync(dirname);
}

(global as any).HANDLE_MERMAID = true;
async function main() {
  console.log('teste');

  const paramFilePath = `src/content/introduction/essentials/components.md,src/content/guide/prerendering.md,src/content/guide/elements.md,src/content/introduction/what-is-angular.md,src/content/introduction/essentials/overview.md`

  const rawParamLines = [
    paramFilePath,
    'public'
  ];

  const [srcs, outputFilenameExecRootRelativePath] = rawParamLines;

  for (const filePath of srcs.split(',')) {
    if (!filePath.endsWith('.md')) {
      throw new Error(`Input file "${filePath}" does not end in a ".md" file extension.`);
    }

    const markdownContent = readFileSync(filePath, {encoding: 'utf8'});
    const htmlOutputContent = await parseMarkdown(markdownContent, {markdownFilePath: filePath});

    const relativePath = filePath.replace('src/content/', '');
    const htmlFileName = relativePath + '.html';
    const htmlOutputPath = path.join(outputFilenameExecRootRelativePath, htmlFileName);

    ensureDirectoryExistence(htmlOutputPath);
    writeFileSync(htmlOutputPath, htmlOutputContent, { encoding: 'utf8' });
  }
}

main();
