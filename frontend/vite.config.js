import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'


export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./src/main.js', import.meta.url))
      },
      output: {
        assetFileNames: "css/style.css",
        entryFileNames: 'js/app.js',
        chunkFileNames: 'js/app.js'
      }
    },
    outDir: '../static',
    emptyOutDir: true,
  }
})
