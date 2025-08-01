import type { SvelteKitPWAOptions } from '@vite-pwa/sveltekit';

export const pwaConfig: SvelteKitPWAOptions = {
  registerType: 'autoUpdate',
  strategies: 'generateSW',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,webmanifest}'],
    globIgnores: ['sw.js', 'workbox-*.js', 'dev-sw.js'],
    cleanupOutdatedCaches: true,
    sourcemap: false,
    skipWaiting: true,
    clientsClaim: true
  },
  injectRegister: 'auto',
  manifest: {
    id: '/',
    lang: 'en',
    dir: 'ltr',
    name: 'Mono-v2',
    short_name: 'Mono-v2',
    description: 'Mono-v2 - Starting monorepo template',
    theme_color: '#d97757',
    background_color: '#262624',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
    categories: ['productivity', 'utilities'],
    shortcuts: [
      {
        name: 'Home',
        short_name: 'Home',
        description: 'View your home',
        url: '/',
        icons: [
          {
            src: '/icons/manifest-icon-96.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      },
      {
        name: 'Dashboard',
        short_name: 'Dashboard',
        description: 'View your dashboard',
        url: '/dashboard',
        icons: [
          {
            src: '/icons/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    ],
    screenshots: [
      {
        src: '/screenshots/desktop1-pwa.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Desktop Home Page'
      },
      {
        src: '/screenshots/desktop2-pwa.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Desktop Dashboard'
      },
      {
        src: '/screenshots/mobile1-pwa.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Mobile Home Page'
      },
      {
        src: '/screenshots/mobile2-pwa.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Mobile Dashboard'
      }
    ],

    icons: [
      {
        src: '/icons/manifest-icon-192.maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icons/manifest-icon-192.maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icons/manifest-icon-512.maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icons/manifest-icon-512.maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ]
  },
  devOptions: {
    enabled: true,
    type: 'module'
  }
};
