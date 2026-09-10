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
  <section
    id="contact"
    class="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-[88px]"
  >
    <div
      class="mx-auto flex w-full max-w-7xl
             flex-col items-center justify-between gap-10
             md:flex-row md:items-center"
    >
      <!-- Text -->
      <div class="w-full text-center md:max-w-[520px] md:text-left">
        <h2
          class="mb-3 text-3xl font-medium
                 leading-tight text-primary
                 sm:text-4xl"
        >
          {{ contact.title }}
        </h2>

        <p
          class="text-sm leading-relaxed text-secondary
                 sm:text-[15px]"
        >
          {{ contact.description }}
        </p>
      </div>

      <!-- Actions -->
      <div
        class="flex w-full shrink-0 flex-col
               items-center gap-5
               md:w-auto md:items-end"
      >
        <!-- Email -->
        <a
          :href="`mailto:${contact.email}`"
          class="inline-flex w-full max-w-sm
                 items-center justify-center
                 break-all rounded-lg bg-button
                 px-4 py-3 text-center text-sm
                 font-semibold text-background
                 transition-all duration-200
                 hover:-translate-y-0.5 hover:bg-button/80
                 sm:w-auto sm:px-5 sm:text-[14.5px]"
        >
          {{ contact.email }}
        </a>

        <!-- Socials -->
        <div
          class="flex max-w-full flex-wrap
                 items-center justify-center gap-x-5 gap-y-3
                 text-sm text-secondary
                 md:justify-end"
        >
          <a
            v-for="social in contact.socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5
                   transition-colors duration-200
                   hover:text-primary"
          >
            <IconSocial :name="social.icon" />
            {{ social.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>