import { sequence } from '@sveltejs/kit/hooks';
import { withClerkHandler } from 'svelte-clerk/server';
import type { Handle } from '@sveltejs/kit';
import { CLERK_SECRET_KEY } from '$env/static/private';
import { paraglideMiddleware } from '$lib/paraglide/server';

const handleParaglide: Handle = ({ event, resolve }) =>
  paraglideMiddleware(event.request, ({ request, locale }) => {
    event.request = request;

    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
    });
  });

const handleClerk = withClerkHandler({
  secretKey: CLERK_SECRET_KEY
});

export const handle: Handle = sequence(handleClerk, handleParaglide);
