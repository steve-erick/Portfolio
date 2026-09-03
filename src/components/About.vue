<script setup>
import { motion } from 'motion-v'

defineProps({
  intro: {
    type: Object,
    required: true
  },
  timeline: {
    type: Array,
    required: true
  },
})
</script>

<template>
  <motion.section
  :initial="{ opacity: 0, x: -40 }"
  :whileInView="{ opacity: 1, x: 0 }"
  :transition="{ duration: 0.6 }"
  :viewport="{ once: true }"
  id="about"
  class="py-12"
>
    <div
    
      class="w-[90%] mx-auto grid grid-cols-1 min-[860px]:grid-cols-[0.9fr_1.1fr] gap-10 min-[860px]:gap-16"
    >

      <!-- Intro -->
      <div>
        <h2 class="text-primary text-[32px] font-medium mb-5">
          {{ intro.title }}
        </h2>

        <p
          v-for="(paragraph, i) in intro.paragraphs"
          :key="i"
          class="text-secondary text-[15.5px] leading-[1.7] mb-[18px] last:mb-0"
        >
          {{ paragraph }}
        </p>
      </div>

      <!-- Timeline -->
      <ol class="list-none m-0 pl-6 border-l border-secondary/20">

        <li
          v-for="item in timeline"
          :key="item.role"
          class="relative pb-9 last:pb-0"
        >

          <span
            aria-hidden="true"
            class="absolute -left-[29px] top-1 w-[9px] h-[9px] rounded-full bg-background border-2 border-button"
          ></span>

          <p class="text-button text-[13px] font-mono mb-1.5">
            {{ item.period }}
          </p>

          <h3 class="text-primary text-[17px] font-medium mb-2">
            {{ item.role }}
          </h3>

          <p class="text-secondary text-[14.5px] leading-[1.6]">
            {{ item.description }}
          </p>

        </li>

      </ol>

    </div>


  </motion.section>
</template>