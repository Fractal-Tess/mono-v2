<script lang="ts">
  import CheckIcon from '@lucide/svelte/icons/check';
  import MinusIcon from '@lucide/svelte/icons/minus';
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import { cn } from '@repo/ui/utils.js';
  import type { WithoutChildrenOrChild } from '@repo/ui/utils.js';
  import type { Snippet } from 'svelte';

  let {
    ref = $bindable(null),
    checked = $bindable(false),
    indeterminate = $bindable(false),
    class: className,
    children: childrenProp,
    ...restProps
  }: WithoutChildrenOrChild<DropdownMenuPrimitive.CheckboxItemProps> & {
    children?: Snippet;
  } = $props();
</script>

<DropdownMenuPrimitive.CheckboxItem
  bind:ref
  bind:checked
  bind:indeterminate
  data-slot="dropdown-menu-checkbox-item"
  class={cn(
    "focus:bg-accent focus:text-accent-foreground outline-hidden relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    className
  )}
  {...restProps}
>
  {#snippet children({ checked, indeterminate })}
    <span
      class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"
    >
      {#if indeterminate}
        <MinusIcon class="size-4" />
      {:else}
        <CheckIcon class={cn('size-4', !checked && 'text-transparent')} />
      {/if}
    </span>
    {@render childrenProp?.()}
  {/snippet}
</DropdownMenuPrimitive.CheckboxItem>
