import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
     tailwindcss(),
    ],
    base: '/',
  server: {
    host: '0.0.0.0',
    port: 5174,
    allowedHosts: [
      '6688-2804-29b8-5186-50e4-f8b7-e034-8fe-15cd.ngrok-free.app'
    ]
  }
})
