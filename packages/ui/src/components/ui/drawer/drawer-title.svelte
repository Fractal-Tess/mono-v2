<script lang="ts">
  import { Drawer as DrawerPrimitive } from 'vaul-svelte';
  import { cn } from '@repo/ui/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: DrawerPrimitive.TitleProps = $props();
</script>

<DrawerPrimitive.Title
  bind:ref
  data-slot="drawer-title"
  class={cn('text-foreground font-semibold', className)}
  {...restProps}
/>
