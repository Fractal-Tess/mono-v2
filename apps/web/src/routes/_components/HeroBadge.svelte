<script lang="ts">
  import { Circle } from 'lucide-svelte';
  import { Badge } from '@repo/ui/components/ui/badge/index.js';

  type Props = {
    badge: string;
  };
  let { badge }: Props = $props();
</script>

<Badge variant="outline" class="mb-8 md:mb-12">
  <Circle class="h-2 w-2 fill-primary" />

  <span class="text-sm tracking-wide">
    {badge}
  </span>
</Badge>
