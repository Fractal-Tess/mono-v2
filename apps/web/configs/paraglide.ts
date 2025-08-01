import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { CompilerOptions } from '@inlang/paraglide-js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const getRelativePath = (relativePath: string) =>
  pathToFileURL(resolve(__dirname, relativePath)).pathname;

export const paraglideConfig: CompilerOptions = {
  project: getRelativePath('../project.inlang'),
  outdir: getRelativePath('../src/lib/paraglide'),
  cleanOutdir: true,
  strategy: ['cookie', 'url', 'localStorage', 'preferredLanguage', 'baseLocale']
};
