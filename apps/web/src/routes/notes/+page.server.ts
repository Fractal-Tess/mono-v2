import { ConvexHttpClient } from 'convex/browser';
import { api } from '@repo/convex/api.js';
import type { PageServerLoad } from './$types.js';
import { PUBLIC_CONVEX_URL } from '$env/static/public';

export const load = (async () => {
  const client = new ConvexHttpClient(PUBLIC_CONVEX_URL!);
  console.log('PUBLIC_CONVEX_URL', PUBLIC_CONVEX_URL);
  return {
    notes: await client.query(api.notes.getNotes, {})
  };
}) satisfies PageServerLoad;
