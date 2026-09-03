<script setup>
defineProps({
  footer: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <footer class="py-7">
    <div
      class="w-[90vw] mx-auto flex justify-between
             font-mono text-[12.5px] text-secondary/60
             max-[560px]:flex-col max-[560px]:gap-2"
    >
      <span>{{ footer.copyright }}</span>
      <span>{{ footer.builtWith }}</span>
    </div>
  </footer>
</template>