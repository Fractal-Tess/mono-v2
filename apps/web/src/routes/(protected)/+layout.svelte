<script lang="ts">
  import * as Sidebar from '@repo/ui/components/ui/sidebar/index.js';
  import AppSidebar from './_components/AppSidebar.svelte';
  import SiteHeader from './dashboard/_components/SiteHeader.svelte';
</script>

<Sidebar.Provider
  style="--sidebar-width: calc(var(--spacing) * 72); --header-height: calc(var(--spacing) * 12);"
>
  <AppSidebar variant="inset" />
  <Sidebar.Inset>
    <SiteHeader />
    <div class="flex flex-1 flex-col">
      <div class="@container/main flex flex-1 flex-col gap-2">
        <slot />
      </div>
    </div>
  </Sidebar.Inset>
</Sidebar.Provider>
