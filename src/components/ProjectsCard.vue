```vue
<script setup>
import { ArrowUpRightIcon } from 'lucide-vue-next';

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="bg-background-secondary border w-[29vw] border-border rounded-xl overflow-hidden flex flex-col"
  >
    <!-- Imagem -->
    <div
      class="aspect-[16/11] bg-[#0d1420] border-b border-border overflow-hidden"
    >
      <img
        :src="project.image"
        :alt="`Captura de tela do projeto ${project.title}`"
        loading="lazy"
        class="w-full h-full object-cover block"
      />
    </div>

    <!-- Conteúdo -->
    <div class="p-5 pt-5 pb-[22px]">
      <!-- Título + ano -->
      <div
        class="flex items-baseline justify-between gap-3 mb-2"
      >
        <h3 class="m-0 text-lg font-medium text-primary">
          {{ project.title }}
        </h3>

        <span class="text-secondary text-[13px] font-mono">
          {{ project.year }}
        </span>
      </div>

      <!-- Descrição -->
      <p
        class="text-secondary text-[14.5px] leading-[1.55] m-0 mb-4"
      >
        {{ project.description }}
      </p>

      <!-- Tags -->
      <ul
        class="list-none flex flex-wrap gap-2 p-0 m-0 mb-[18px]"
      >
        <li
          v-for="tag in project.tags"
          :key="tag"
          class="text-secondary text-[12.5px] font-mono border border-border rounded-[5px] px-2 py-[3px]"
        >
          {{ tag }}
        </li>
      </ul>

      <!-- Link -->
      <a
        :href="project.href"
        class="text-button text-sm font-semibold hover:underline flex"
      >
        {{ project.text }}
        <ArrowUpRightIcon class="size-6 text-button"/>
      </a>
    </div>
  </article>
</template>
```
