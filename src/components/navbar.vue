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
  <div class="absolute top-6 right-6">
    <nav class="flex gap-3">
      <button
        class="text-button text-sm font-semibold hover:underline"
        @click="changeLanguage('EUA')"
      >
        EN
      </button>

      <button
        class="text-button text-sm font-semibold hover:underline"
        @click="changeLanguage('BR')"
      >
        PT
      </button>
    </nav>
  </div>
</template>