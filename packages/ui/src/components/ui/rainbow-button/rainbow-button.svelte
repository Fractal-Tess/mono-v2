<script lang="ts">
  import { cn } from '@repo/ui/utils.js';
  import type { Snippet } from 'svelte';
  import type {
    HTMLAnchorAttributes,
    HTMLButtonAttributes
  } from 'svelte/elements';

  interface $$Props extends HTMLButtonAttributes {
    class?: string;
  }

  type Props =
    | {
        children?: Snippet<[]>;
        class?: string;
        props?: HTMLButtonAttributes;
      }
    | {
        href: string;
        children?: Snippet<[]>;
        class?: string;
        props?: HTMLAnchorAttributes;
      };

  let { class: className = '', children, ...props }: Props = $props();
</script>

{#if 'href' in props}
  <a
    class={cn(
      'rainbow-button group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 text-primary font-extrabold transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',

      // light mode colors
      'bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))]',

      // dark mode colors
      'dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))]',

      className
    )}
    {...props}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    class={cn(
      'rainbow-button group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 text-primary font-extrabold transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',

      // light mode colors
      'bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))]',

      // dark mode colors
      'dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))]',

      className
    )}
    {...props}
  >
    {@render children?.()}
  </button>
{/if}

<style>
  .rainbow-button {
    animation: rainbow var(--speed, 2s) infinite linear;
  }

  .rainbow-button::before {
    content: '';
    position: absolute;
    bottom: -20%;
    left: 50%;
    z-index: 0;
    height: 20%;
    width: 60%;
    transform: translateX(-50%);
    animation: rainbow var(--speed, 2s) infinite linear;
    background: linear-gradient(
      90deg,
      hsl(0, 100%, 63%),
      hsl(90, 100%, 63%),
      hsl(210, 100%, 63%),
      hsl(195, 100%, 63%),
      hsl(270, 100%, 63%)
    );
    background-size: 200%;
    filter: blur(0.8rem);
  }

  @keyframes rainbow {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 200%;
    }
  }
</style>
