import { redirect } from '@sveltejs/kit';
import { useQuery } from 'convex-svelte';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const { userId } = locals.auth();

  if (!userId) {
    return redirect(307, '/sign-in');
  }
};
