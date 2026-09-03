<script setup>
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Hero from './components/hero.vue';
import Navbar from './components/navbar.vue';
import Projects from './components/Projects.vue';
import Tools from './components/Tools.vue';
import { profile } from './data/profile.js'
import { ref } from 'vue'
Tools
const language = ref('EUA')

</script>

<template>
    <Navbar class="bg-background"
    :language="language"
    @change-language="language = $event"
    />
    <div class="min-h-screen min-w-screenw bg-background flex items-center justify-center flex-col gap-20">
    <Hero :hero="profile[language].hero"/>
        <div class="w-[95%] border-t border-secondary/30"></div>

    <Projects :featured-project="profile[language].featuredProject" :work-intro="profile[language].workIntro" :projects="profile[language].projects"/>
        <div class="w-[90%] border-t border-secondary/30"></div>
    <About :intro="profile[language].aboutIntro" :timeline="profile[language].timeline" />
            <div class="w-[90%] border-t border-secondary/30"></div>

    <Tools :groups="profile[language].toolGroups" />
            <div class="w-[90%] border-t border-secondary/30"></div>

    <Contact :contact="profile[language].contact" />
        <div class="w-[90%] border-t border-secondary/30"></div>
    <Footer :footer="profile[language].footer" />

  </div>
</template>

