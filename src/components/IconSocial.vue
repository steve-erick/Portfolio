<script setup>
defineProps({
  name: { type: String, required: true }, // 'github' | 'linkedin' | 'instagram'
})
</script>

<template>
  <svg v-if="name === 'github'" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.61-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.9 1.55 2.36 1.11 2.94.85.09-.66.35-1.11.64-1.37-2.22-.25-4.56-1.13-4.56-5.02 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.04a9.4 9.4 0 0 1 5 0c1.91-1.31 2.75-1.04 2.75-1.04.55 1.39.2 2.43.1 2.68.64.71 1.03 1.62 1.03 2.73 0 3.9-2.35 4.76-4.58 5.01.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"
      fill="currentColor"
    />
  </svg>
  <svg v-else-if="name === 'linkedin'" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.98h3.96V21H3V9.98ZM9.5 9.98h3.8v1.5h.05c.53-.95 1.82-1.95 3.75-1.95 4.01 0 4.75 2.55 4.75 5.86V21h-3.96v-5c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63V21H9.5V9.98Z"
      fill="currentColor"
    />
  </svg>
  <svg v-else-if="name === 'instagram'" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6" />
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.6" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
  </svg>
</template>
