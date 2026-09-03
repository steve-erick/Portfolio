<script setup>
import IconSocial from './IconSocial.vue'

defineProps({
  contact: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section id="contact" class="py-[88px]">
    <div
      class="w-[90vw] mx-auto flex flex-col min-[720px]:flex-row
             items-start min-[720px]:items-center
             justify-between gap-10"
    >

      <!-- Text -->
      <div>
        <h2
          class="text-primary text-[30px] font-medium
                 max-w-[440px] mb-3"
        >
          {{ contact.title }}
        </h2>

        <p
          class="text-secondary text-[15px] leading-[1.6]
                 max-w-[460px]"
        >
          {{ contact.description }}
        </p>
      </div>

      <!-- Actions -->
      <div
        class="flex flex-col items-start min-[720px]:items-end
               gap-[18px] flex-shrink-0
               w-full min-[720px]:w-auto"
      >

        <!-- Email -->
        <a
          :href="`mailto:${contact.email}`"
          class="inline-flex items-center gap-2
                 bg-button text-background
                 font-semibold text-[14.5px]
                 px-5 py-3 rounded-lg
                 whitespace-nowrap
                 transition-colors
                 hover:bg-button/80"
        >
          {{ contact.email }}
        </a>

        <!-- Socials -->
        <div
          class="flex gap-5
                 text-secondary text-sm"
        >
          <a
            v-for="s in contact.socials"
            :key="s.label"
            :href="s.href"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5
                   hover:text-primary transition-colors"
          >
            <IconSocial :name="s.icon" />
            {{ s.label }}
          </a>
        </div>

      </div>
    </div>
  </section>
</template>