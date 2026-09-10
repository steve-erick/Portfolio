<script setup>
import { ArrowUpRightIcon } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="group flex h-full w-full flex-col overflow-hidden
           rounded-xl border border-border
           bg-background-secondary
           shadow-[0_4px_20px_-8px_rgba(15,23,32,0.12)]
           transition-all duration-300
           hover:-translate-y-1
           hover:shadow-[0_10px_30px_-8px_rgba(15,23,32,0.2)]"
  >
    <!-- Imagem -->
    <div
      class="aspect-video overflow-hidden
             border-b border-border bg-[#0d1420]"
    >
      <img
        :src="project.image"
        :alt="`Captura de tela do projeto ${project.title}`"
        loading="lazy"
        class="block h-full w-full object-cover
               transition-transform duration-500
               group-hover:scale-105"
      />
    </div>

    <!-- Conteúdo -->
    <div class="flex flex-1 flex-col p-4 sm:p-5">
      <!-- Título e ano -->
      <div class="mb-3 flex items-start justify-between gap-3">
        <h3
          class="m-0 text-lg font-medium leading-tight
                 text-primary sm:text-xl"
        >
          {{ project.title }}
        </h3>

        <span
          class="shrink-0 font-mono text-xs text-secondary
                 sm:text-[13px]"
        >
          {{ project.year }}
        </span>
      </div>

      <!-- Descrição -->
      <p
        class="mb-4 flex-1 text-sm leading-relaxed
               text-secondary sm:text-[14.5px]"
      >
        {{ project.description }}
      </p>

      <!-- Tags -->
      <ul class="mb-5 flex list-none flex-wrap gap-2 p-0">
        <li
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-md border border-border
                 px-2 py-1 font-mono text-xs text-secondary"
        >
          {{ tag }}
        </li>
      </ul>

      <!-- Link -->
      <a
        :href="project.href"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex w-fit items-center gap-1.5
               text-sm font-semibold text-button
               transition-all duration-200
               hover:gap-2.5 hover:underline"
      >
        {{ project.text }}

        <ArrowUpRightIcon class="size-4" />
      </a>
    </div>
  </article>
</template>