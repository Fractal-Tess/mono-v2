<script lang="ts">
  import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
  import { cn } from '@repo/ui/utils.js';
  import type { WithoutChildrenOrChild } from '@repo/ui/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    value,
    ...restProps
  }: WithoutChildrenOrChild<RangeCalendarPrimitive.YearSelectProps> = $props();
</script>

<span
  class={cn(
    'has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative flex rounded-md border',
    className
  )}
>
  <RangeCalendarPrimitive.YearSelect
    bind:ref
    class="absolute inset-0 opacity-0"
    {...restProps}
  >
    {#snippet child({ props, yearItems, selectedYearItem })}
      <select {...props} {value}>
        {#each yearItems as yearItem (yearItem.value)}
          <option
            value={yearItem.value}
            selected={value !== undefined
              ? yearItem.value === value
              : yearItem.value === selectedYearItem.value}
          >
            {yearItem.label}
          </option>
        {/each}
      </select>
      <span
        class="[&>svg]:text-muted-foreground flex h-8 select-none items-center gap-1 rounded-md pl-2 pr-1 text-sm font-medium [&>svg]:size-3.5"
        aria-hidden="true"
      >
        {yearItems.find(item => item.value === value)?.label ||
          selectedYearItem.label}
        <ChevronDownIcon class="size-4" />
      </span>
    {/snippet}
  </RangeCalendarPrimitive.YearSelect>
</span>
