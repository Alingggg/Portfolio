<script setup lang="ts">
import { profile } from '@/data/profile'
import { skillIcons } from '@/data/skillIcons'
import SkillIcon from '@/components/SkillIcon.vue'
</script>

<template>
  <!-- Intro -->
  <header>
    <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
      <img
        v-if="profile.photo"
        :src="profile.photo"
        :alt="`Photo of ${profile.name}`"
        class="size-28 shrink-0 rounded-full object-cover object-top sm:size-32"
      />
      <div
        v-else
        class="flex size-28 shrink-0 items-center justify-center rounded-full border border-dashed border-zinc-300 bg-zinc-50 text-2xl font-medium text-zinc-400 sm:size-32 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-500"
        role="img"
        aria-label="Photo placeholder"
      >
        {{ profile.initials }}
      </div>

      <div>
        <h1 class="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {{ profile.name }}
        </h1>
        <p class="mt-2 text-lg text-zinc-700 dark:text-zinc-300">{{ profile.tagline }}</p>
        <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{{ profile.location }}</p>
      </div>
    </div>

    <!-- Stacked on mobile, one horizontal row on desktop -->
    <ul class="mt-6 flex flex-col gap-y-1.5 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2">
      <li v-for="(link, i) in profile.links" :key="link.href" class="flex items-center gap-x-2">
        <span v-if="i > 0" class="hidden text-zinc-300 sm:inline dark:text-zinc-600" aria-hidden="true">|</span>
        <a
          :href="link.href"
          class="link"
          v-bind="link.href.startsWith('http') || link.href.endsWith('.pdf') ? { target: '_blank', rel: 'noopener noreferrer' } : {}"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </header>

  <!-- Skills -->
  <section aria-labelledby="skills" class="mt-12">
    <h2 id="skills" class="section-label">Skills</h2>
    <div class="mt-6 space-y-8">
      <div v-for="group in profile.skills" :key="group.name">
        <h3 class="font-medium text-zinc-900 dark:text-zinc-100">{{ group.name }}</h3>
        <ul class="mt-3 flex flex-wrap gap-2">
          <li
            v-for="skill in group.skills"
            :key="skill"
            class="inline-flex items-center gap-2 rounded-md border border-zinc-200 px-2.5 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
          >
            <SkillIcon
              v-if="skillIcons[skill]"
              :icon="skillIcons[skill]"
              class="size-4 shrink-0 text-zinc-500 dark:text-zinc-400"
            />
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- About -->
  <section aria-labelledby="about" class="mt-20">
    <h2 id="about" class="section-label">About</h2>
    <div class="mt-6 space-y-4 text-zinc-700 dark:text-zinc-300">
      <p v-for="(paragraph, i) in profile.about" :key="i">{{ paragraph }}</p>
    </div>

    <dl class="mt-10">
      <div>
        <dt class="flex flex-wrap items-baseline justify-between gap-x-4">
          <span class="font-medium text-zinc-900 dark:text-zinc-100">{{ profile.education.degree }}</span>
          <span class="text-sm text-zinc-500 dark:text-zinc-400">{{ profile.education.period }}</span>
        </dt>
        <dd class="mt-1 text-zinc-700 dark:text-zinc-300">{{ profile.education.school }}</dd>
      </div>
    </dl>
  </section>
</template>
