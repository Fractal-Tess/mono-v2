<script lang="ts">
  import * as ResizablePrimitive from 'paneforge';
  import { cn } from '@repo/ui/utils.js';

  let {
    ref = $bindable(null),
    this: paneGroup = $bindable(),
    class: className,
    ...restProps
  }: ResizablePrimitive.PaneGroupProps & {
    this?: ResizablePrimitive.PaneGroup;
  } = $props();
</script>

<ResizablePrimitive.PaneGroup
  bind:this={paneGroup}
  data-slot="resizable-pane-group"
  class={cn('flex h-full w-full data-[direction=vertical]:flex-col', className)}
  {...restProps}
/>
