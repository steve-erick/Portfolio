<script setup>
import { motion } from 'motion-v'

defineProps({
  groups: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section id="skills" class="py-24">
    <div class="w-[90%] mx-auto">

      <!-- Intro -->
      <header class="max-w-[560px] mb-12">
        <h2 class="text-primary text-[32px] font-medium mb-3">
          Tools, honestly ranked
        </h2>

        <p class="text-secondary text-[15.5px]">
          Grouped by how well I actually know them, rather than as one
          undifferentiated logo wall.
        </p>
      </header>

      <!-- Groups -->
      <div
        class="grid grid-cols-1 min-[860px]:grid-cols-3 gap-8 min-[860px]:gap-10"
      >
        <div
          v-for="group in groups"
          :key="group.title"
        >
          <!-- Group title -->
          <h3 class="text-button text-sm font-mono mb-1.5">
            {{ group.title }}
          </h3>

          <!-- Description -->
          <p class="text-secondary/70 text-[13.5px] mb-4">
            {{ group.description }}
          </p>

          <!-- Tools -->
          <ul class="list-none flex flex-wrap gap-2.5 p-0 m-0">
            <motion.li
              v-for="(tool, i) in group.tools"
              :key="tool"
              :initial="{ opacity: 0, y: 15 }"
              :whileInView="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.35, delay: i * 0.05 }"
              :viewport="{ once: true }"
                            class="font-mono text-[13px] border border-secondary/20 rounded-md px-3 py-1.5 text-primary"

            >
              {{ tool }}
            </motion.li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>