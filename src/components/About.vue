<script setup>
import { motion } from 'motion-v'

defineProps({
  intro: {
    type: Object,
    required: true,
  },
  timeline: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <motion.section
    id="about"
    :initial="{ opacity: 0, x: -40 }"
    :whileInView="{ opacity: 1, x: 0 }"
    :transition="{ duration: 0.6 }"
    :viewport="{ once: true, amount: 0.1 }"
    class="w-full overflow-x-clip
           px-4 py-16
           sm:px-6 sm:py-20
           lg:px-8"
  >
    <div
      class="mx-auto grid w-full max-w-7xl
             grid-cols-1 gap-12
             min-[860px]:grid-cols-[0.9fr_1.1fr]
             min-[860px]:gap-16"
    >
      <!-- Introdução -->
      <div class="w-full">
        <h2
          class="mb-5 text-3xl font-medium
                 leading-tight text-primary
                 sm:text-4xl"
        >
          {{ intro.title }}
        </h2>

        <p
          v-for="(paragraph, index) in intro.paragraphs"
          :key="index"
          class="mb-4 text-sm leading-relaxed
                 text-secondary last:mb-0
                 sm:text-[15.5px] sm:leading-[1.7]"
        >
          {{ paragraph }}
        </p>
      </div>

      <!-- Timeline -->
      <ol
        class="m-0 list-none
               border-l border-secondary/20
               pl-5 sm:pl-7"
      >
        <li
          v-for="item in timeline"
          :key="`${item.role}-${item.period}`"
          class="relative pb-8 last:pb-0 sm:pb-9"
        >
          <!-- Marcador -->
          <span
            aria-hidden="true"
            class="absolute -left-[25px] top-1
                   h-[9px] w-[9px] rounded-full
                   border-2 border-button bg-background
                   sm:-left-[33px]"
          />

          <!-- Período -->
          <p
            class="mb-1.5 font-mono text-xs
                   text-button sm:text-[13px]"
          >
            {{ item.period }}
          </p>

          <!-- Cargo -->
          <h3
            class="mb-2 text-base font-medium
                   leading-snug text-primary
                   sm:text-[17px]"
          >
            {{ item.role }}
          </h3>

          <!-- Descrição -->
          <p
            class="text-sm leading-relaxed text-secondary
                   sm:text-[14.5px] sm:leading-[1.6]"
          >
            {{ item.description }}
          </p>
        </li>
      </ol>
    </div>
  </motion.section>
</template>