import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';
import { paraglideConfig } from './configs/paraglide';
import { pwaConfig } from './configs/pwa';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    SvelteKitPWA(pwaConfig),
    paraglideVitePlugin(paraglideConfig)
  ]
});
