<script lang="ts">
  import InnerShadowTopIcon from '@tabler/icons-svelte/icons/inner-shadow-top';
  import * as Sidebar from '@repo/ui/components/ui/sidebar/index.js';
  import type { ComponentProps } from 'svelte';
  import * as m from '$lib/paraglide/messages.js';
  import NavDocuments from './nav-documents.svelte';
  import NavMain from './nav-main.svelte';
  import NavSecondary from './nav-secondary.svelte';
  import NavUser from './nav-user.svelte';
  import { sidebarData } from './sidebar-data.js';

  let { ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton class="data-[slot=sidebar-menu-button]:!p-1.5">
          {#snippet child({ props })}
            <a href="##" {...props}>
              <InnerShadowTopIcon class="!size-5" />
              <span class="text-base font-semibold"
                >{m['dashboard.company_name']()}</span
              >
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>
  <Sidebar.Content>
    <NavMain items={sidebarData.navMain} />
    <NavDocuments items={sidebarData.documents} />
    <NavSecondary items={sidebarData.navSecondary} class="mt-auto" />
  </Sidebar.Content>
  <Sidebar.Footer>
    <NavUser user={sidebarData.user} />
  </Sidebar.Footer>
</Sidebar.Root>
