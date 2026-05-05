import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Avoid dev-time blank screens caused by stale optimized-deps cached by the browser.
  // Changing the cache directory also changes the URL prefix for optimized deps.
  cacheDir: 'node_modules/.vite-vonana',
  server:
    command === 'serve'
      ? {
          headers: {
            'Cache-Control': 'no-store',
          },
        }
      : undefined,
}))
