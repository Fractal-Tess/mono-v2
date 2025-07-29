<script lang="ts">
  import { useConvexClient, useQuery } from 'convex-svelte';
  import { api } from '@repo/convex/api.js';
  import { Button } from '@repo/ui/components/ui/button/index.js';

  const client = useConvexClient();

  const query = useQuery(api.notes.getNotes, {});

  function createNote() {
    client.mutation(api.notes.createNote, {
      title: Math.random().toString(36).substring(2, 15),
      content: Math.random().toString(36).substring(2, 15),
      isSummary: false
    });
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>
<p>
  <a href="/notes" class="text-blue-600 hover:text-blue-800 underline"
    >View Server-Rendered Notes Page</a
  >
</p>

{#if query.isLoading}
  <p>Loading...</p>
{:else if query.error}
  <p>Error: {query.error.message}</p>
{:else}
  <pre>{JSON.stringify(query.data, null, 2)}</pre>
{/if}

<Button onclick={createNote}>Click me</Button>
