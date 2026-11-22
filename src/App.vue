<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80"
  >
    <nav class="mx-auto flex max-w-2xl gap-6 px-6 py-5 text-base font-semibold">
      <RouterLink to="/" class="nav-link" exact-active-class="nav-link-active">Home</RouterLink>
      <RouterLink to="/projects" class="nav-link" active-class="nav-link-active">Projects</RouterLink>
    </nav>
  </header>

  <div class="mx-auto max-w-2xl px-6 pb-10 sm:pb-14">
    <main class="mt-12 sm:mt-16">
      <RouterView />
    </main>
  </div>
</template>
