<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';
  import { SignedIn, SignedOut } from 'svelte-clerk/client';
  import { RainbowButton } from '@repo/ui/components/ui/rainbow-button/index.js';
  import * as m from '$lib/paraglide/messages.js';
</script>

<RainbowButton href="/dashboard" class="text-lg font-semibold">
  {m['home.hero.dashboard']()}
  <ArrowRight class="ml-2 w-5 h-5" />
</RainbowButton>
