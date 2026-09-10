<script setup>
import { ArrowUpRightIcon, Code2 } from 'lucide-vue-next'
import ProjectsCard from './ProjectsCard.vue'
import { motion } from 'motion-v'

defineProps({
  workIntro: { type: Object, required: true },
  featuredProject: { type: Object, required: true },
  projects: { type: Array, required: true },
})
</script>

<template>
  <motion.div
    id="work"
    :initial="{ opacity: 0, y: 40 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6 }"
    :viewport="{ once: true, amount: 0.1 }"
    class="flex w-full flex-col items-center gap-6 px-4 py-12 sm:px-6 lg:px-8"
  >
    <!-- Header -->
    <div class="w-full max-w-7xl">
      <div class="flex max-w-3xl flex-col gap-3">
        <h1
          class="text-3xl font-medium text-primary sm:text-4xl lg:text-5xl"
        >
          {{ workIntro.title }}
        </h1>

        <p class="text-sm leading-relaxed text-secondary sm:text-base">
          {{ workIntro.description }}
        </p>
      </div>
    </div>

    <!-- Featured Card -->
    <div
      class="flex h-auto w-full max-w-7xl flex-col gap-5 rounded-2xl
             border border-border bg-background-secondary p-4
             shadow-[0_4px_24px_-8px_rgba(15,23,32,0.12)]
             transition-shadow duration-300
             hover:shadow-[0_8px_32px_-8px_rgba(15,23,32,0.18)]
             sm:p-6 lg:p-8"
    >
      <!-- Featured -->
      <p
        class="flex items-center justify-center gap-2 text-sm
               font-medium text-button lg:justify-start"
      >
        <span
          class="h-1.5 w-1.5 rounded-full bg-button
                 shadow-[0_0_8px_rgba(15,157,124,0.7)]
                 animate-pulse"
        />

        {{ featuredProject.eyebrow }}
      </p>

      <!-- Content -->
      <div
        class="flex w-full flex-col items-stretch gap-6
               lg:flex-row lg:items-center lg:gap-10"
      >
        <!-- Image -->
        <div
          class="w-full overflow-hidden rounded-xl border border-border
                 shadow-[0_2px_16px_-4px_rgba(15,23,32,0.15)]
                 lg:w-1/2"
        >
          <img
            :src="featuredProject.image"
            :alt="featuredProject.title"
            class="aspect-video h-full w-full object-cover"
          />
        </div>

        <!-- Information -->
        <div
          class="flex w-full flex-col items-start justify-center
                 lg:w-1/2"
        >
          <h2
            class="text-3xl font-bold text-primary
                   sm:text-4xl lg:text-5xl"
          >
            {{ featuredProject.title }}
          </h2>

          <p
            class="mt-3 text-sm leading-relaxed text-secondary
                   sm:mt-4 sm:text-base"
          >
            {{ featuredProject.description }}
          </p>

          <!-- Technologies -->
          <div class="mt-5 flex flex-wrap gap-2 sm:mt-6">
            <span
              v-for="stack in featuredProject.stack"
              :key="stack"
              class="rounded-2xl border border-border
                     bg-background px-3 py-1.5
                     text-sm font-medium text-primary
                     shadow-[0_1px_4px_rgba(15,23,32,0.06)]
                     sm:px-4"
            >
              {{ stack }}
            </span>
          </div>

          <!-- Buttons -->
          <div
            class="mt-6 flex w-full flex-col gap-3
                   sm:w-auto sm:flex-row"
          >
            <a
              :href="featuredProject.caseStudyHref"
              class="inline-flex w-full items-center justify-center gap-2
                     rounded-2xl bg-button px-6 py-3
                     font-medium text-primary
                     shadow-[0_2px_12px_-2px_rgba(15,157,124,0.45)]
                     transition-all duration-200
                     hover:scale-105
                     hover:shadow-[0_4px_20px_-2px_rgba(15,157,124,0.55)]
                     sm:w-auto"
            >
              {{ featuredProject.ctprimary }}
              <ArrowUpRightIcon :size="18" />
            </a>

            <a
              :href="featuredProject.sourceHref"
              class="inline-flex w-full items-center justify-center gap-2
                     rounded-2xl border border-border
                     px-6 py-3 font-medium text-primary
                     shadow-[0_1px_6px_rgba(15,23,32,0.06)]
                     transition-all duration-200
                     hover:bg-background
                     hover:shadow-[0_2px_10px_rgba(15,23,32,0.1)]
                     sm:w-auto"
            >
              <Code2 :size="18" />
              {{ featuredProject.ctsecondary }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Other projects -->
    <div
      class="grid w-full max-w-7xl grid-cols-1 gap-6
             md:grid-cols-2 lg:grid-cols-3"
    >
      <ProjectsCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>
  </motion.div>
</template>