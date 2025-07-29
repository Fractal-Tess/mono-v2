<script lang="ts">
  import { useConvexClient, useQuery } from 'convex-svelte';
  import { api } from '@repo/convex/api.js';
  import { Button } from '@repo/ui/components/ui/button/index.js';
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
  } from '@repo/ui/components/ui/card/index.js';
  import { Input } from '@repo/ui/components/ui/input/index.js';
  // import { Label } from '@repo/ui/components/ui/label/index.js';
  import { Textarea } from '@repo/ui/components/ui/textarea/index.js';
  import type { PageData } from './$types';
  import type { Id } from '@repo/convex/dataModel.js';

  // console.log(Label);

  let { data }: { data: PageData } = $props();
  const client = useConvexClient();

  // Use initial data from server to avoid loading state
  const notes = useQuery(
    api.notes.getNotes,
    () => ({}),
    () => ({ initialData: data.notes })
  );

  let newNoteTitle = $state('');
  let newNoteContent = $state('');
  let isSummary = $state(false);

  function createNote() {
    if (!newNoteTitle.trim() || !newNoteContent.trim()) return;

    client.mutation(api.notes.createNote, {
      title: newNoteTitle,
      content: newNoteContent,
      isSummary
    });

    // Reset form
    newNoteTitle = '';
    newNoteContent = '';
    isSummary = false;
  }

  function deleteNote(noteId: Id<'notes'>) {
    client.mutation(api.notes.deleteNote, { noteId });
  }
</script>

<svelte:head>
  <title>Notes - Server Rendered</title>
</svelte:head>

<div class="container mx-auto p-6 max-w-4xl">
  <h1 class="text-3xl font-bold mb-8">Notes (Server Rendered)</h1>

  <!-- Create Note Form -->
  <Card class="mb-8">
    <CardHeader>
      <CardTitle>Create New Note</CardTitle>
      <CardDescription>Add a new note to your collection</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <div>
        <label for="title">Title</label>
        <Input
          id="title"
          bind:value={newNoteTitle}
          placeholder="Enter note title"
          class="mt-1"
        />
      </div>
      <div>
        <label for="content">Content</label>
        <Textarea
          id="content"
          bind:value={newNoteContent}
          placeholder="Enter note content"
          class="mt-1"
          rows={4}
        />
      </div>
      <div class="flex items-center space-x-2">
        <input type="checkbox" id="summary" bind:checked={isSummary} />
        <label for="summary">Generate AI summary</label>
      </div>
      <Button
        onclick={createNote}
        disabled={!newNoteTitle.trim() || !newNoteContent.trim()}
      >
        Create Note
      </Button>
    </CardContent>
  </Card>

  <!-- Notes List -->
  <div class="space-y-4">
    <h2 class="text-2xl font-semibold">Your Notes</h2>

    {#if notes.error}
      <Card>
        <CardContent class="pt-6">
          <p class="text-red-600">Error loading notes: {notes.error.message}</p>
        </CardContent>
      </Card>
    {:else if notes.data && notes.data.length === 0}
      <Card>
        <CardContent class="pt-6">
          <p class="text-gray-500">
            No notes yet. Create your first note above!
          </p>
        </CardContent>
      </Card>
    {:else}
      <div class="grid gap-4">
        {#each notes.data || [] as note}
          <Card>
            <CardHeader>
              <div class="flex justify-between items-start">
                <div>
                  <CardTitle>{note.title}</CardTitle>
                  <CardDescription>
                    Created: {new Date(note._creationTime).toLocaleDateString()}
                  </CardDescription>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onclick={() => deleteNote(note._id)}
                >
                  Delete
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p class="whitespace-pre-wrap">{note.content}</p>
            </CardContent>
          </Card>
        {/each}
      </div>
    {/if}
  </div>
</div>
