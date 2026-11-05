<script setup lang="ts">
import { profile, type Project } from '@/data/profile'

const categories: Project['category'][] = ['Web & Mobile', 'Data Engineering']
const groups = categories
  .map((name) => ({ name, projects: profile.projects.filter((p) => p.category === name) }))
  .filter((group) => group.projects.length > 0)
</script>

<template>
  <header>
    <h1 class="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Projects</h1>
    <p class="mt-2 text-zinc-700 dark:text-zinc-300">A few things I've built, and where I've worked.</p>
  </header>

  <section
    v-for="group in groups"
    :key="group.name"
    :aria-label="group.name"
    class="mt-12"
  >
    <h2 class="section-label">{{ group.name }}</h2>
    <ul class="mt-6 space-y-10">
      <li v-for="project in group.projects" :key="project.name">
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 class="font-medium text-zinc-900 dark:text-zinc-100">{{ project.name }}</h3>
          <div v-if="project.live || project.source" class="flex gap-4 text-sm">
            <a v-if="project.live" :href="project.live" class="link" target="_blank" rel="noopener noreferrer">Live</a>
            <a v-if="project.source" :href="project.source" class="link" target="_blank" rel="noopener noreferrer">Source</a>
          </div>
        </div>
        <p class="mt-1 text-zinc-700 dark:text-zinc-300">{{ project.description }}</p>
        <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{{ project.tech.join(' · ') }}</p>
      </li>
    </ul>
  </section>

  <!-- Experience -->
  <section aria-labelledby="experience" class="mt-20">
    <h2 id="experience" class="section-label">Experience</h2>
    <ul class="mt-6 space-y-10">
      <li v-for="role in profile.experience" :key="role.org">
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 class="font-medium text-zinc-900 dark:text-zinc-100">{{ role.title }}, {{ role.org }}</h3>
          <span v-if="role.period" class="text-sm text-zinc-500 dark:text-zinc-400">{{ role.period }}</span>
        </div>
        <p class="mt-1 text-zinc-700 dark:text-zinc-300">{{ role.summary }}</p>
      </li>
    </ul>
  </section>
</template>
