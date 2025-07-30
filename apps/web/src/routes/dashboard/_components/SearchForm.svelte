<script lang="ts">
  import SearchIcon from '@lucide/svelte/icons/search';
  import { Label } from '@repo/ui/components/ui/label/index.js';
  import * as Sidebar from '@repo/ui/components/ui/sidebar/index.js';
  import type { WithElementRef } from '@repo/ui/utils.js';
  import type { HTMLFormAttributes } from 'svelte/elements';
  import * as m from '$lib/paraglide/messages.js';

  let {
    ref = $bindable(null),
    ...restProps
  }: WithElementRef<HTMLFormAttributes> = $props();
</script>

<form bind:this={ref} {...restProps}>
  <Sidebar.Group class="py-0">
    <Sidebar.GroupContent class="relative">
      <Label for="search" class="sr-only">{m['dashboard.search.label']()}</Label
      >
      <Sidebar.Input
        id="search"
        placeholder={m['dashboard.search.placeholder']()}
        class="pl-8"
      />
      <SearchIcon
        class="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50"
      />
    </Sidebar.GroupContent>
  </Sidebar.Group>
</form>
