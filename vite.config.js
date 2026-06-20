import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})


// Note: If you get an error that __dirname is not defined in an ES module, add import { fileURLToPath } from 'url'; and replace __dirname with path.dirname(fileURLToPath(import.meta.url)))