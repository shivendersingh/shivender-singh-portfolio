import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo name — must match the GitHub repository so Pages assets resolve correctly.
const repoName = 'shivender-singh-portfolio'

export default defineConfig({
  base: process.env.GITHUB_PAGES ? `/${repoName}/` : '/',
  plugins: [react()],
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 900,
  },
})


