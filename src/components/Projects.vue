<script setup>
import { ArrowUpRightIcon, Code2 } from 'lucide-vue-next'
import ProjectsCard from './ProjectsCard.vue';
import { motion } from 'motion-v'


defineProps({
  workIntro: { type: Object, required: true },
  featuredProject: {type: Object, required: true},
  projects: { type: Array, required: true }
})
</script>

<template>
    <motion.div
    :initial="{ opacity: 0, y: 40 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6 }"
    :viewport="{ once: true, amount: 0.1}"  
    class="flex flex-col gap-6 items-center" id="work">

        <!-- Header -->
        <div class="flex flex-col gap-3 max-w-3xl">
            <h1 class="text-primary text-5xl font-medium">
                {{workIntro.title}}
            </h1>

            <p class="text-secondary">
                {{workIntro.description}}
            </p>
        </div>

        <!-- Featured Card -->
        <div
            class="flex flex-col bg-background-secondary rounded-2xl
                   border border-border
                   shadow-[0_4px_24px_-8px_rgba(15,23,32,0.12)]
                   hover:shadow-[0_8px_32px_-8px_rgba(15,23,32,0.18)]
                   transition-shadow duration-300
                   w-[90vw] h-[33vw] p-5 gap-5"
        >

            <!-- Featured -->
            <p class="flex items-center justify-center gap-2 text-sm text-button font-medium">
                <span
                    class="w-1.5 h-1.5 bg-button rounded-full animate-pulse shadow-[0_0_8px_rgba(15,157,124,0.7)]"
                ></span>
                {{featuredProject.eyebrow}}
            </p>

            <!-- Content -->
            <div
                class="flex items-center justify-between
                       w-full gap-10"
            >

                <!-- Image -->
                <div class="w-1/2 overflow-hidden rounded-xl border border-border shadow-[0_2px_16px_-4px_rgba(15,23,32,0.15)]">
                    <img
                        :src="featuredProject.image"
                        class="w-full aspect-video object-fit "
                        alt="BattleDev"
                    >

                </div>

                <!-- Information -->
                <div
                    class="w-1/2 flex flex-col
                           justify-center items-start"
                >

                    <h2 class="text-primary text-5xl font-bold">
                        {{featuredProject.title}}
                    </h2>

                    <p class="text-secondary mt-4 leading-relaxed">
                        {{ featuredProject.description }}
                    </p>

                    <!-- Technologies -->
                    <div class="flex flex-wrap gap-2 mt-6">

                        <span v-for="stacks in featuredProject.stack"
                            :key="stacks"
                            class="rounded-2xl px-4 py-1.5
                                   bg-background text-primary font-medium
                                   border border-border
                                   shadow-[0_1px_4px_rgba(15,23,32,0.06)]"
                        >
                            {{stacks}}
                        </span>
                    </div>

                    <!-- Buttons -->
                    <div class="flex gap-3 mt-6">

                        <a
                            href="#"
                            class="inline-flex items-center gap-2
                                   rounded-2xl bg-button
                                   px-6 py-3 font-medium
                                   text-primary
                                   shadow-[0_2px_12px_-2px_rgba(15,157,124,0.45)]
                                   transition-all duration-200
                                   hover:scale-105
                                   hover:shadow-[0_4px_20px_-2px_rgba(15,157,124,0.55)]"
                        >
                            {{ featuredProject.ctprimary }}
                            <ArrowUpRightIcon :size="18" />
                        </a>

                        <a
                            href="#"
                            class="inline-flex items-center justify-center gap-2
                                   rounded-2xl px-6 py-3
                                   border border-border
                                   text-primary font-medium
                                   shadow-[0_1px_6px_rgba(15,23,32,0.06)]
                                   transition-all duration-200
                                   hover:bg-background
                                   hover:shadow-[0_2px_10px_rgba(15,23,32,0.1)]"
                        >
                            <Code2 :size="18" />
                            {{featuredProject.ctsecondary}}
                        </a>

                    </div>

                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectsCard
                v-for="project in projects"
                :key="project.title"
                :project="project"
            />
        </div>
    </motion.div>
</template>