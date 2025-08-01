<script lang="ts">
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
  import { Toaster } from '@repo/ui/components/ui/sonner/index.js';
  import type { LayoutProps } from './$types';
  import { ClerkProvider, ConvexProvider } from '$lib/providers';
  import DevModeSwitcher from '$lib/providers/DevModeSwitcher.svelte';

  let { children, data }: LayoutProps = $props();
  const { initialState } = data;
</script>

<ModeWatcher defaultMode="dark" defaultTheme="dark" />
<DevModeSwitcher />
<Toaster />

<ClerkProvider {initialState}>
  <ConvexProvider>
    {@render children()}
  </ConvexProvider>
</ClerkProvider>
