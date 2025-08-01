import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';
import { pwaConfig } from './src/lib/configs/pwa';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    SvelteKitPWA(pwaConfig),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/lib/paraglide',
      cleanOutdir: true,
      strategy: [
        'cookie',
        'url',
        'localStorage',
        'preferredLanguage',
        'baseLocale'
      ]
    })
  ]
});
