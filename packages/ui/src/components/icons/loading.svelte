<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';

  let restProps: SVGAttributes<SVGElement> = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  class="animate-spin"
  {...restProps}
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 3a9 9 0 1 0 9 9" />
</svg>
