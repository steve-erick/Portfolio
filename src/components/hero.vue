<script setup>
import { Download, MoveRight, MapPin } from 'lucide-vue-next';

defineProps({
  hero: {
    type: Object,
    required: true,
  },
})
</script>

<template>
    <div class="flex flex-col items-center gap-3 w-full">

        <img
            class="w-2/3 md:w-2/6"
            src="../assets/logo.png"
            alt="Logo"
        />

        <h1 class="text-primary text-5xl md:text-7xl font-bold">
            Erick Castro
        </h1>

        <div class="flex items-center justify-center flex-row gap-3 w-full px-4">

            <a
                href="#work"
                class="inline-flex items-center gap-2 rounded-2xl bg-button px-6 py-3 font-medium text-slate-900 transition-colors hover:bg-emerald-300"
            >
                {{hero.primaryCta.label}}
                <MoveRight />
            </a>

            <a
                href="#work"
                class="inline-flex items-center gap-2 rounded-2xl px-6 py-3 outline text-primary font-medium transition-colors hover:bg-emerald-300"
            >
                <Download />
                {{hero.secondaryCta.label}}

            </a>

        </div>

        <div class="flex flex-row">
            <p class="text-secondary text-[15px] gap-1 inline-flex items-center">
                <MapPin class="size-5" />
                {{hero.location}}
            </p>
        </div>

    </div>
</template>