<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import { cn } from '@repo/ui/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: NavigationMenuPrimitive.ItemProps = $props();
</script>

<NavigationMenuPrimitive.Item
  bind:ref
  data-slot="navigation-menu-item"
  class={cn('relative', className)}
  {...restProps}
/>
