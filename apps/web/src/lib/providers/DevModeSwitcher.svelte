<script lang="ts">
  import { toggleMode } from 'mode-watcher';
  import { dev } from '$app/environment';
  import { getLocale, setLocale } from '$lib/paraglide/runtime.js';

  $effect(() => {
    if (!dev) return;
    const key = 't';
    console.log(`Setting up ${key} key to toggle theme`);
    const handler = (e: KeyboardEvent) => {
      if (e.key === key) {
        toggleMode();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  $effect(() => {
    if (!dev) return;
    const key = 'l';
    console.log(`Setting up ${key} key to toggle locale`);
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'l') {
        const currentLocale = getLocale();
        const newLocale = currentLocale === 'en' ? 'bg' : 'en';
        setLocale(newLocale);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });
</script>
