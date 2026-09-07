<script setup>
import ThemeRope from './ThemeRope.vue';


defineProps({
  language: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['change-language'])

function changeLanguage(language) {
  emit('change-language', language)
}
</script>
<template>
    <ThemeRope/>
  <div class="absolute right-6 top-6">
    <nav
      aria-label="Selecionar idioma"
      class="inline-flex items-center gap-1 rounded-full
             border border-primary/15 bg-background-secondary
             p-1 shadow-sm"
    >
      <button
        v-for="item in [
          { code: 'EUA', label: 'EN', name: 'English' },
          { code: 'BR', label: 'PT', name: 'Português' },
        ]"
        :key="item.code"
        type="button"
        :aria-label="item.name"
        :aria-pressed="language === item.code"
        class="rounded-full px-4 py-2 text-xs font-semibold
               tracking-wide transition-all duration-200
               focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-button focus-visible:ring-offset-2
               focus-visible:ring-offset-background-secondary"
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
  </div>
</template>