<script lang="ts" module>
  import { tv } from 'tailwind-variants';
  import type { VariantProps } from 'tailwind-variants';

  export const alertVariants = tv({
    base: 'relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        destructive:
          'text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  });

  export type AlertVariant = VariantProps<typeof alertVariants>['variant'];
</script>

<script lang="ts">
  import { cn } from '@repo/ui/utils.js';
  import type { WithElementRef } from '@repo/ui/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    variant = 'default',
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    variant?: AlertVariant;
  } = $props();
</script>

<div
  bind:this={ref}
  data-slot="alert"
  class={cn(alertVariants({ variant }), className)}
  {...restProps}
  role="alert"
>
  {@render children?.()}
</div>
