<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="mx-auto max-w-2xl px-6 py-10 sm:py-14">
    <nav class="flex gap-6 text-sm">
      <RouterLink to="/" class="nav-link" exact-active-class="nav-link-active">Home</RouterLink>
      <RouterLink to="/projects" class="nav-link" active-class="nav-link-active">Projects</RouterLink>
    </nav>

    <main class="mt-16 sm:mt-20">
      <RouterView />
    </main>
  </div>
</template>
