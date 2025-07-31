<script lang="ts">
  import '../app.css';
  import type { LayoutProps } from './$types';
  import { ClerkProvider, ConvexProvider } from '$lib/providers';

  let { children, data }: LayoutProps = $props();
  const { initialState } = data;
</script>

<ClerkProvider {initialState}>
  <ConvexProvider>
    {@render children()}
  </ConvexProvider>
</ClerkProvider>
