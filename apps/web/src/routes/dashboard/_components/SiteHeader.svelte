<script lang="ts">
  import { Button } from '@repo/ui/components/ui/button/index.js';
  import { Separator } from '@repo/ui/components/ui/separator/index.js';
  import * as Sidebar from '@repo/ui/components/ui/sidebar/index.js';
  import * as m from '$lib/paraglide/messages.js';
</script>

<header
  class="h-(--header-height) group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) flex shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear"
>
  <div class="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
    <Sidebar.Trigger class="-ml-1" />
    <Separator
      orientation="vertical"
      class="mx-2 data-[orientation=vertical]:h-4"
    />
    <h1 class="text-base font-medium">{m['dashboard.documents']()}</h1>
    <div class="ml-auto flex items-center gap-2">
      <Button
        href="https://github.com/fractal-tess/mono-v2"
        variant="ghost"
        size="sm"
        class="dark:text-foreground hidden sm:flex"
        target="_blank"
        rel="noopener noreferrer"
      >
        {m['dashboard.github']()}
      </Button>
    </div>
  </div>
</header>
