<script lang="ts">
  type Props = {
    title1: string;
    title2: string;
  };
  let { title1, title2 }: Props = $props();
</script>

<div>
  <h1
    class="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight"
  >
    <span class="bg-clip-text">
      {title1}
    </span>
    <span class="bg-clip-text">
      {title2}
    </span>
  </h1>
</div>
