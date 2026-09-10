<script setup>
import { Download, MoveRight, MapPin } from 'lucide-vue-next'

defineProps({
  hero: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section
  class="flex min-h-[100svh] w-full flex-col
         items-center justify-center gap-5
         overflow-x-clip
         px-4 py-2 text-center
         sm:px-6 lg:px-8"
>
    <!-- Imagem -->
    <img
  src="/images/logo.png"
  alt="Ilustração de Erick Castro"
  class="h-auto w-52 max-w-full
         sm:w-64 md:w-2/6   "
/>

    <!-- Nome -->
    <h1
      class="max-w-full text-4xl font-bold
             leading-tight text-primary
             sm:text-5xl md:text-6xl lg:text-7xl"
    >
      Erick Castro
    </h1>

    <!-- Botões -->
    <div
      class="flex w-full max-w-md flex-col
             items-center justify-center gap-3
             sm:max-w-none sm:flex-row"
    >
      <a
        href="#work"
        class="inline-flex w-full items-center justify-center
               gap-2 rounded-2xl bg-button
               px-6 py-3 font-medium text-slate-900
               transition-all duration-200
               hover:-translate-y-0.5
               hover:bg-emerald-300
               sm:w-auto"
      >
        {{ hero.primaryCta.label }}
        <MoveRight class="size-5" />
      </a>

      <a
        :href="hero.secondaryCta.href"
        download
        class="inline-flex w-full items-center justify-center
               gap-2 rounded-2xl border border-primary
               px-6 py-3 font-medium text-primary
               transition-all duration-200
               hover:-translate-y-0.5
               hover:bg-primary hover:text-background
               sm:w-auto"
      >
        <Download class="size-5" />
        {{ hero.secondaryCta.label }}
      </a>
    </div>

    <!-- Localização -->
    <p
      class="inline-flex items-center justify-center
             gap-1.5 text-sm text-secondary
             sm:text-[15px]"
    >
      <MapPin class="size-4 shrink-0 sm:size-5" />
      {{ hero.location }}
    </p>
  </section>
</template>