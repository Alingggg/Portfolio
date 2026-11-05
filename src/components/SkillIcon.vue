<script setup lang="ts">
import type { SkillIconSource } from '@/data/skillIcons'

defineProps<{ icon: SkillIconSource }>()
</script>

<template>
  <img v-if="typeof icon === 'object' && 'src' in icon" :src="icon.src" alt="" />

  <svg
    v-else-if="typeof icon === 'object'"
    viewBox="0 0 24 24"
    fill="currentColor"
    :style="{ color: `#${icon.hex}` }"
    aria-hidden="true"
  >
    <path :d="icon.path" />
  </svg>

  <svg
    v-else
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="icon === 'database'">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </template>
    <template v-else-if="icon === 'code'">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </template>
    <template v-else-if="icon === 'terminal'">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </template>
  </svg>
</template>
