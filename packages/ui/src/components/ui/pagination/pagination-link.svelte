<script lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import { buttonVariants } from '@repo/ui/components/ui/button/index.js';
  import { cn } from '@repo/ui/utils.js';
  import type { Props } from '@repo/ui/components/ui/button/index.js';

  let {
    ref = $bindable(null),
    class: className,
    size = 'icon',
    isActive,
    page,
    children,
    ...restProps
  }: PaginationPrimitive.PageProps &
    Props & {
      isActive: boolean;
    } = $props();
</script>

{#snippet Fallback()}
  {page.value}
{/snippet}

<PaginationPrimitive.Page
  bind:ref
  {page}
  aria-current={isActive ? 'page' : undefined}
  data-slot="pagination-link"
  data-active={isActive}
  class={cn(
    buttonVariants({
      variant: isActive ? 'outline' : 'ghost',
      size
    }),
    className
  )}
  children={children || Fallback}
  {...restProps}
/>
