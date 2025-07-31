<script lang="ts">
  import ChartAreaInteractive from './_components/ChartAreaInteractive.svelte';
  import data from './_components/data.js';
  import DataTable from './_components/DataTable.svelte';
  import SectionCards from './_components/SectionCards.svelte';
</script>

<div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
  <SectionCards />
  <div class="px-4 lg:px-6">
    <ChartAreaInteractive />
  </div>
  <DataTable {data} />
</div>
