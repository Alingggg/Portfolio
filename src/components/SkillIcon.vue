<script setup lang="ts">
import { computed } from 'vue'
import type { SkillIconSource } from '@/data/skillIcons'

const props = defineProps<{ icon: SkillIconSource }>()

/** Page background (white); brand colors are adjusted to stay visible on it. */
const BACKGROUND = 'ffffff'
/** Low on purpose: only near-invisible colors get adjusted, the rest stay on-brand. */
const MIN_CONTRAST = 1.5

function toRgb(hex: string): [number, number, number] {
  const n = parseInt(hex, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

function luminance([r, g, b]: [number, number, number]) {
  const [R, G, B] = [r, g, b].map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  }) as [number, number, number]
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

function contrast(a: [number, number, number], b: [number, number, number]) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number]
  return (hi + 0.05) / (lo + 0.05)
}

/**
 * The brand color, unless it would be hard to see on the white background:
 * white/grey logos (Better Auth) turn near-black, and very light colored ones
 * (JavaScript's yellow, Drizzle's lime) are darkened just enough to read.
 */
function readableColor(hex: string) {
  const bg = toRgb(BACKGROUND)
  const rgb = toRgb(hex)
  if (contrast(rgb, bg) >= MIN_CONTRAST) return `#${hex}`

  const saturation = Math.max(...rgb) - Math.min(...rgb)
  if (saturation < 40) return '#18181b'

  for (let t = 0.1; t <= 1; t += 0.1) {
    const mixed = rgb.map((v) => Math.round(v * (1 - t))) as [number, number, number]
    if (contrast(mixed, bg) >= MIN_CONTRAST) return `rgb(${mixed.join(' ')})`
  }
  return '#18181b'
}

const brandColor = computed(() =>
  typeof props.icon === 'object' && 'hex' in props.icon ? readableColor(props.icon.hex) : undefined,
)
</script>

<template>
  <!-- Full-color logo (Devicon) -->
  <img v-if="typeof icon === 'object' && 'src' in icon" :src="icon.src" alt="" />

  <!-- Single-color logo (Simple Icons, filled 24×24 path) in its brand color -->
  <svg
    v-else-if="typeof icon === 'object'"
    viewBox="0 0 24 24"
    fill="currentColor"
    :style="{ color: brandColor }"
    aria-hidden="true"
  >
    <path :d="icon.path" />
  </svg>

  <!-- Generic outline icon (inherits the text color) -->
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
