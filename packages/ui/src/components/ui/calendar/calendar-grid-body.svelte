<script lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import { cn } from '@repo/ui/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CalendarPrimitive.GridBodyProps = $props();
</script>

<CalendarPrimitive.GridBody bind:ref class={cn(className)} {...restProps} />
