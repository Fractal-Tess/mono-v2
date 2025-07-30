<script lang="ts">
  import TrendingDownIcon from '@tabler/icons-svelte/icons/trending-down';
  import TrendingUpIcon from '@tabler/icons-svelte/icons/trending-up';
  import { Badge } from '@repo/ui/components/ui/badge/index.js';
  import * as Card from '@repo/ui/components/ui/card/index.js';
  import * as m from '$lib/paraglide/messages.js';
</script>

<div
  class="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t lg:px-6"
>
  <Card.Root class="@container/card">
    <Card.Header>
      <Card.Description>{m['dashboard.cards.total_revenue']()}</Card.Description
      >
      <Card.Title
        class="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums"
      >
        $1,250.00
      </Card.Title>
      <Card.Action>
        <Badge variant="outline">
          <TrendingUpIcon />
          +12.5%
        </Badge>
      </Card.Action>
    </Card.Header>
    <Card.Footer class="flex-col items-start gap-1.5 text-sm">
      <div class="line-clamp-1 flex gap-2 font-medium">
        {m['dashboard.cards.trending_up']()}
        <TrendingUpIcon class="size-4" />
      </div>
      <div class="text-muted-foreground">
        {m['dashboard.cards.visitors_description']()}
      </div>
    </Card.Footer>
  </Card.Root>
  <Card.Root class="@container/card">
    <Card.Header>
      <Card.Description>{m['dashboard.cards.new_customers']()}</Card.Description
      >
      <Card.Title
        class="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums"
      >
        1,234
      </Card.Title>
      <Card.Action>
        <Badge variant="outline">
          <TrendingDownIcon />
          -20%
        </Badge>
      </Card.Action>
    </Card.Header>
    <Card.Footer class="flex-col items-start gap-1.5 text-sm">
      <div class="line-clamp-1 flex gap-2 font-medium">
        {m['dashboard.cards.trending_down']()}
        <TrendingDownIcon class="size-4" />
      </div>
      <div class="text-muted-foreground">
        {m['dashboard.cards.acquisition_description']()}
      </div>
    </Card.Footer>
  </Card.Root>
  <Card.Root class="@container/card">
    <Card.Header>
      <Card.Description
        >{m['dashboard.cards.active_accounts']()}</Card.Description
      >
      <Card.Title
        class="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums"
      >
        45,678
      </Card.Title>
      <Card.Action>
        <Badge variant="outline">
          <TrendingUpIcon />
          +12.5%
        </Badge>
      </Card.Action>
    </Card.Header>
    <Card.Footer class="flex-col items-start gap-1.5 text-sm">
      <div class="line-clamp-1 flex gap-2 font-medium">
        {m['dashboard.cards.strong_retention']()}
        <TrendingUpIcon class="size-4" />
      </div>
      <div class="text-muted-foreground">
        {m['dashboard.cards.engagement_description']()}
      </div>
    </Card.Footer>
  </Card.Root>
  <Card.Root class="@container/card">
    <Card.Header>
      <Card.Description>{m['dashboard.cards.growth_rate']()}</Card.Description>
      <Card.Title
        class="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums"
      >
        4.5%
      </Card.Title>
      <Card.Action>
        <Badge variant="outline">
          <TrendingUpIcon />
          +4.5%
        </Badge>
      </Card.Action>
    </Card.Header>
    <Card.Footer class="flex-col items-start gap-1.5 text-sm">
      <div class="line-clamp-1 flex gap-2 font-medium">
        {m['dashboard.cards.steady_performance']()}
        <TrendingUpIcon class="size-4" />
      </div>
      <div class="text-muted-foreground">
        {m['dashboard.cards.growth_description']()}
      </div>
    </Card.Footer>
  </Card.Root>
</div>
