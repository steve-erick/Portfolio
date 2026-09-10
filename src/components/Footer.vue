<script setup>
defineProps({
  footer: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <footer class="w-full border-t border-border py-6 sm:py-7">
    <div
      class="mx-auto flex w-full max-w-7xl
             flex-col items-center justify-center gap-2
             px-4 text-center font-mono
             text-xs text-secondary/60
             sm:flex-row sm:justify-between
             sm:px-6 sm:text-left
             lg:px-8"
    >
      <span>
        {{ footer.copyright }}
      </span>

      <span>
        {{ footer.builtWith }}
      </span>
    </div>
  </footer>
</template>