<script lang="ts">
  import * as m from '$lib/paraglide/messages.js';
  import Hero from './_components/Hero.svelte';
</script>

<svelte:head>
  <title>Mono V2 - Modern Web Application Platform</title>
  <meta
    name="description"
    content="A powerful, modern web application platform built with SvelteKit, featuring real-time collaboration, beautiful UI components, and enterprise-grade security."
  />
</svelte:head>

<Hero
  badge={m['home.hero.badge']()}
  title1={m['home.hero.title1']()}
  title2={m['home.hero.title2']()}
/>
