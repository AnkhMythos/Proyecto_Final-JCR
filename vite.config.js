import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://AnkhMythos.github.io/Proyecto_Final-JCR/",
  plugins: [react()],
})
