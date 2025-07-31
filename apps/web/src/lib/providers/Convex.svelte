<script lang="ts">
  import { setupConvex, useConvexClient } from 'convex-svelte';
  import { useClerkContext } from 'svelte-clerk/client';
  import { PUBLIC_CONVEX_URL } from '$env/static/public';

  setupConvex(PUBLIC_CONVEX_URL);

  const { children } = $props();
  const clerk = useClerkContext();
  const convex = useConvexClient();

  $effect(() => {
    clerk.session
      ?.getToken({
        template: 'convex'
      })
      .then(token => {
        convex.setAuth(
          async () => token,
          state => {}
        );
      });
  });
</script>

{@render children()}
