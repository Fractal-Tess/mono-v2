<script lang="ts">
  import { toggleMode } from 'mode-watcher';
  import { toast } from 'svelte-sonner';
  import { dev } from '$app/environment';
  import { getLocale, setLocale } from '$lib/paraglide/runtime.js';

  $effect(() => {
    if (!dev) return;
    const key = 'm';
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
        console.log(`Toggled locale to ${newLocale}`);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  $effect(() => {
    if (!dev) return;
    const key = 't';

    const handler = (e: KeyboardEvent) => {
      if (e.key === key) {
        toast.success('Dev mode is enabled');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });
</script>
