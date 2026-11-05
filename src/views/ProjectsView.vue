<script setup lang="ts">
import { profile, type Project } from '@/data/profile'

const categories: Project['category'][] = ['Web & Mobile', 'Data Engineering']
const groups = categories
  .map((name) => ({ name, projects: profile.projects.filter((p) => p.category === name) }))
  .filter((group) => group.projects.length > 0)

/** Phone screenshots are taller than wide and get laid out side by side. */
const isPortrait = (project: Project) =>
  project.images?.some((image) => image.height > image.width) ?? false
</script>

<template>
  <header>
    <h1 class="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Projects</h1>
  </header>

  <!-- Experience -->
  <section aria-labelledby="experience" class="mt-12">
    <h2 id="experience" class="section-label">Experience</h2>
    <ul class="mt-6 space-y-6">
      <li v-for="role in profile.experience" :key="role.org" class="card p-5 sm:p-6">
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 class="font-medium text-zinc-900 dark:text-zinc-100">{{ role.title }}, {{ role.org }}</h3>
          <span v-if="role.period" class="text-sm text-zinc-500 dark:text-zinc-400">{{ role.period }}</span>
        </div>
        <p class="mt-2 text-zinc-700 dark:text-zinc-300">{{ role.summary }}</p>
        <ul v-if="role.tech?.length" class="mt-4 flex flex-wrap gap-1.5" :aria-label="`${role.org} tech stack`">
          <li v-for="tech in role.tech" :key="tech" class="tech-tag">{{ tech }}</li>
        </ul>
      </li>
    </ul>
  </section>

  <section
    v-for="group in groups"
    :key="group.name"
    :aria-label="group.name"
    class="mt-12"
  >
    <h2 class="section-label">{{ group.name }}</h2>
    <ul class="mt-6 space-y-6">
      <li
        v-for="project in group.projects"
        :key="project.name"
        class="card overflow-hidden p-5 sm:p-6"
      >
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 class="font-medium text-zinc-900 dark:text-zinc-100">{{ project.name }}</h3>
          <div v-if="project.live || project.source" class="flex gap-4 text-sm">
            <a v-if="project.live" :href="project.live" class="link" target="_blank" rel="noopener noreferrer">Live</a>
            <a
              v-if="project.source"
              :href="project.source"
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${project.name} source code on GitHub`"
            >GitHub</a>
          </div>
        </div>

        <!-- Screenshots: one wide image edge to edge (negative margins cancel the card padding), or phone screens side by side on a tinted panel -->
        <div
          v-if="project.images?.length"
          class="-mx-5 mt-4 mb-5 border-y border-zinc-200 sm:-mx-6 sm:mb-6 dark:border-zinc-800"
          :class="isPortrait(project) ? 'bg-zinc-100 px-6 py-6 sm:px-10 dark:bg-zinc-800/50' : ''"
        >
          <div :class="isPortrait(project) ? 'mx-auto grid max-w-md grid-cols-3 gap-3 sm:gap-4' : ''">
            <img
              v-for="image in project.images"
              :key="image.src"
              :src="image.src"
              :alt="image.alt"
              :width="image.width"
              :height="image.height"
              loading="lazy"
              decoding="async"
              class="block h-auto w-full bg-zinc-50 dark:bg-zinc-900"
              :class="isPortrait(project) ? 'rounded-xl shadow-sm ring-1 ring-zinc-900/10' : ''"
            />
          </div>
        </div>

        <p class="mt-2 text-zinc-700 dark:text-zinc-300">{{ project.description }}</p>
        <ul class="mt-4 flex flex-wrap gap-1.5" :aria-label="`${project.name} tech stack`">
          <li v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</li>
        </ul>
      </li>
    </ul>
  </section>
</template>
