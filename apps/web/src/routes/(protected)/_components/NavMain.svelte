<script lang="ts">
  import * as Sidebar from '@repo/ui/components/ui/sidebar/index.js';
  import type { Icon } from '@tabler/icons-svelte';
  import { page } from '$app/state';

  let { items }: { items: { title: string; url: string; icon?: Icon }[] } =
    $props();
</script>

<Sidebar.Group>
  <Sidebar.GroupContent class="flex flex-col gap-2">
    <Sidebar.Menu>
      {#each items as item (item.title)}
        <Sidebar.MenuItem>
          <Sidebar.MenuButton
            tooltipContent={item.title}
            isActive={item.url === page.url.pathname}
          >
            {#snippet child({ props })}
              <a href={item.url} {...props}>
                {#if item.icon}
                  <item.icon />
                {/if}
                <span>{item.title}</span>
              </a>
            {/snippet}
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      {/each}
    </Sidebar.Menu>
  </Sidebar.GroupContent>
</Sidebar.Group>
