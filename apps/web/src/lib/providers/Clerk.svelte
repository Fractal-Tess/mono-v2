<script lang="ts">
  import { shadcn } from '@clerk/themes';
  import { ClerkProvider } from 'svelte-clerk/client';
  import type { InitialState } from '@clerk/types';
  import type { Snippet } from 'svelte';
  import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';

  type Props = {
    children: Snippet;
    initialState: InitialState;
  };

  const { children, initialState }: Props = $props();
</script>

<ClerkProvider
  publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}
  {initialState}
  appearance={{
    theme: shadcn
  }}
>
  {@render children()}
</ClerkProvider>
