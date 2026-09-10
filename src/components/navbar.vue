<script setup>
import ThemeRope from './ThemeRope.vue'

defineProps({
  language: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['change-language'])

const languages = [
  { code: 'EUA', label: 'EN', name: 'English' },
  { code: 'BR', label: 'PT', name: 'Português' },
]

function changeLanguage(language) {
  emit('change-language', language)
}
</script>

<template>
  <header
    class="pointer-events-none fixed inset-x-0 top-0 z-50 h-0"
  >
    <!-- Controle de tema -->
    <div
      class="pointer-events-auto absolute left-3 top-0
             sm:left-6"
    >
      <ThemeRope />
    </div>

    <!-- Idiomas -->
    <nav
      aria-label="Selecionar idioma"
      class="pointer-events-auto absolute right-3 top-3
             inline-flex shrink-0 items-center gap-1
             rounded-full border border-primary/15
             bg-background-secondary/90 p-1 shadow-sm
             backdrop-blur-md
             sm:right-6 sm:top-5"
    >
      <button
        v-for="item in languages"
        :key="item.code"
        type="button"
        :aria-label="item.name"
        :aria-pressed="language === item.code"
        class="rounded-full px-3 py-1.5
               text-[11px] font-semibold tracking-wide
               transition-all duration-200
               focus-visible:outline-none
               focus-visible:ring-2
               focus-visible:ring-button
               sm:px-4 sm:py-2 sm:text-xs"
        :class="
          language === item.code
            ? 'bg-button text-slate-900 shadow-sm'
            : 'text-secondary hover:bg-primary/10 hover:text-primary'
        "
        @click="changeLanguage(item.code)"
      >
        {{ item.label }}
      </button>
    </nav>
  </header>
</template>