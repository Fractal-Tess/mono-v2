import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

// Get all notes for a specific user
export const getNotes = query({
  args: {},
  handler: async ctx => {
    const notes = await ctx.db.query('notes').collect();

    return notes;
  }
});

// Get note for a specific note
export const getNote = query({
  args: {
    id: v.optional(v.id('notes'))
  },
  handler: async (ctx, args) => {
    const { id } = args;
    if (!id) return null;
    const note = await ctx.db.get(id);
    return note;
  }
});

// Create a new note for a user
export const createNote = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    isSummary: v.boolean()
  },
  handler: async (ctx, { title, content, isSummary }) => {
    const identity = await ctx.auth.getUserIdentity();
    console.log('identity', identity);
    if (!identity) {
      throw new Error('Unauthorized');
    }

    const noteId = await ctx.db.insert('notes', {
      title,
      content,
      userId: identity.subject
    });

    return noteId;
  }
});

export const deleteNote = mutation({
  args: {
    noteId: v.id('notes')
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error('Unauthorized');
    }

    const note = await ctx.db.get(args.noteId);
    if (!note) {
      throw new Error('Note not found');
    }

    if (note.userId !== identity.subject) {
      throw new Error('Unauthorized');
    }
    await ctx.db.delete(args.noteId);
  }
});
