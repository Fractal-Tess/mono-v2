<script lang="ts">
  import { cn } from '@repo/ui/utils.js';

  let shapes = [
    {
      id: 1,
      delay: 300,
      width: 600,
      height: 140,
      rotate: 12,
      gradient: 'from-indigo-500/[0.15]',
      class: 'left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]'
    },
    {
      id: 2,
      delay: 500,
      width: 500,
      height: 120,
      rotate: -15,
      gradient: 'from-rose-500/[0.15]',
      class: 'right-[-5%] md:right-[0%] top-[70%] md:top-[75%]'
    },
    {
      id: 3,
      delay: 400,
      width: 300,
      height: 80,
      rotate: -8,
      gradient: 'from-violet-500/[0.15]',
      class: 'left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]'
    },
    {
      id: 4,
      delay: 600,
      width: 200,
      height: 60,
      rotate: 20,
      gradient: 'from-amber-500/[0.15]',
      class: 'right-[15%] md:right-[20%] top-[10%] md:top-[15%]'
    },
    {
      id: 5,
      delay: 700,
      width: 150,
      height: 40,
      rotate: -25,
      gradient: 'from-cyan-500/[0.15]',
      class: 'left-[20%] md:left-[25%] top-[5%] md:top-[10%]'
    }
  ];
</script>

<div class="absolute inset-0 overflow-hidden motion-preset-slide-up">
  {#each shapes as shape, _}
    <div
      class={cn('absolute', shape.class)}
      style="width: {shape.width}px; height: {shape.height}px; transform: rotate({shape.rotate}deg);"
    >
      <div
        class={cn(
          'absolute inset-0 rounded-full',
          'bg-gradient-to-r to-transparent',
          shape.gradient,
          'backdrop-blur-[2px] border-2 border-white/[0.15]',
          'shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]',
          'after:absolute after:inset-0 after:rounded-full',
          'after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]'
        )}
        style="animation: float 12s ease-in-out infinite;"
      ></div>
    </div>
  {/each}
</div>

<style>
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(15px);
    }
  }
</style>
