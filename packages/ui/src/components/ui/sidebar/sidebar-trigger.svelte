<script lang="ts">
  import PanelLeftIcon from '@lucide/svelte/icons/panel-left';
  import { Button } from '@repo/ui/components/ui/button/index.js';
  import { cn } from '@repo/ui/utils.js';
  import type { ComponentProps } from 'svelte';
  import { useSidebar } from './context.svelte.js';

  let {
    ref = $bindable(null),
    class: className,
    onclick,
    ...restProps
  }: ComponentProps<typeof Button> & {
    onclick?: (e: MouseEvent) => void;
  } = $props();

  const sidebar = useSidebar();
</script>

<Button
  data-sidebar="trigger"
  data-slot="sidebar-trigger"
  variant="ghost"
  size="icon"
  class={cn('size-7', className)}
  type="button"
  onclick={e => {
    onclick?.(e);
    sidebar.toggle();
  }}
  {...restProps}
>
  <PanelLeftIcon />
  <span class="sr-only">Toggle Sidebar</span>
</Button>
