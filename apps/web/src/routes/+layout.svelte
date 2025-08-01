<script lang="ts">
  import '../app.css';
  import { ModeWatcher, toggleMode } from 'mode-watcher';
  import { onMount } from 'svelte';
  import { pwaInfo } from 'virtual:pwa-info';
  import type { LayoutProps } from './$types';
  import { ClerkProvider, ConvexProvider } from '$lib/providers';

  let { children, data }: LayoutProps = $props();
  const { initialState } = data;

  // Listen for the "ok" button (Enter) and "," key, execute a lambda
  $effect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.key === ',' ||
        (e.key === 'Enter' &&
          e.target instanceof HTMLButtonElement &&
          e.target.innerText.toLowerCase() === 'ok')
      ) {
        // Lambda to execute on ',' or "ok" button
        (() => {
          // Place your logic here
          toggleMode();
        })();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  let webManifestLink = $derived(pwaInfo ? pwaInfo.webManifest.linkTag : '');

  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import('virtual:pwa-register');
      registerSW({
        immediate: true,
        onRegistered(r) {
          console.log(`SW Registered: ${r}`);
        },
        onRegisterError(error) {
          console.log('SW registration error', error);
        }
      });
    }
  });
</script>

<svelte:head>
  {@html webManifestLink}
  <!-- /// -->
</svelte:head>

<ModeWatcher defaultMode="dark" />

<ClerkProvider {initialState}>
  <ConvexProvider>
    {@render children()}
  </ConvexProvider>
</ClerkProvider>
