import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/tic-tac-toe/',
  build: {
    outDir: 'dist',
  },
  plugins: [
    tailwindcss(),
  ],
})
