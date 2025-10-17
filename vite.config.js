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

  // =========================================================
  // CONFIGURACIÓN AÑADIDA PARA VITEST (Testeo :D)
  // =========================================================
  test: {
    globals: true, // Permite usar 'describe', 'it', 'expect' globalmente
    environment: 'jsdom', // Simula un entorno de navegador (DOM)
    setupFiles: './src/setupTests.js', // Archivo para configurar @testing-library/jest-dom (crearemos este)
    css: false, // Ignorar CSS en las pruebas
  },
  // =========================================================
})