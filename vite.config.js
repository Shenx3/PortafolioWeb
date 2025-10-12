import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Importa 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // El alias para la carpeta 'src'
      '@': path.resolve(__dirname, './src'),
    },
  },
})