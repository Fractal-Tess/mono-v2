<script lang="ts">
  import '../app.css';
  import { ModeWatcher, toggleMode } from 'mode-watcher';
  import type { LayoutProps } from './$types';

  let { children }: LayoutProps = $props();

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
</script>

<ModeWatcher defaultMode="dark" />

{@render children()}
