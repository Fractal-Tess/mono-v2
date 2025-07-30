<script lang="ts">
  import { ArrowRight, Circle } from 'lucide-svelte';
  import { quintOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import { Button } from '@repo/ui/components/ui/button/index.js';
  import { cn } from '@repo/ui/utils.js';
  import * as m from '$lib/paraglide/messages.js';

  type Props = {
    badge: string;
    title1: string;
    title2: string;
  };

  const { badge, title1, title2 }: Props = $props();

  let mounted = $state(false);
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

  $effect(() => {
    mounted = true;
  });
</script>

<div
  class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]"
>
  <div
    class="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl"
  ></div>

  <div class="absolute inset-0 overflow-hidden">
    {#each shapes as shape, i}
      {#if mounted}
        <div
          class={cn('absolute', shape.class)}
          style="width: {shape.width}px; height: {shape.height}px; transform: rotate({shape.rotate}deg);"
          in:fly={{
            y: -150,
            duration: 2400,
            delay: shape.delay,
            easing: quintOut
          }}
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
      {/if}
    {/each}
  </div>

  <div class="relative z-10 container mx-auto px-4 md:px-6">
    <div class="max-w-3xl mx-auto text-center">
      {#if mounted}
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          in:fly={{ y: 30, duration: 1000, delay: 500, easing: quintOut }}
        >
          <Circle class="h-2 w-2 fill-rose-500/80" />
          <span class="text-sm text-white/60 tracking-wide">
            {badge}
          </span>
        </div>

        <div in:fly={{ y: 30, duration: 1000, delay: 700, easing: quintOut }}>
          <h1
            class="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight"
          >
            <span
              class="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
            >
              {title1}
            </span>
            <br />
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
            >
              {title2}
            </span>
          </h1>
        </div>

        <div in:fly={{ y: 30, duration: 1000, delay: 900, easing: quintOut }}>
          <p
            class="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4"
          >
            {m['home.hero.description']()}
          </p>
        </div>

        <!-- Sign In Button -->
        <div in:fly={{ y: 30, duration: 1000, delay: 1100, easing: quintOut }}>
          <Button
            href="/sign-in"
            variant="outline"
            class="text-lg font-semibold"
          >
            {m['home.hero.sign_in']()}
            <ArrowRight class="ml-2 w-5 h-5" />
          </Button>
        </div>
      {/if}
    </div>
  </div>

  <div
    class="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none"
  ></div>
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
