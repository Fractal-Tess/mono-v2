<script lang="ts">
  import { Separator } from '@repo/ui/components/ui/separator/index.js';
  import { cn } from '@repo/ui/utils.js';
  import type { ComponentProps } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: ComponentProps<typeof Separator> = $props();
</script>

<Separator
  bind:ref
  data-slot="sidebar-separator"
  data-sidebar="separator"
  class={cn('bg-sidebar-border', className)}
  {...restProps}
/>
