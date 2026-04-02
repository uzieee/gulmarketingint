import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    // Listen on all interfaces (same idea as `vite --host`); avoids some localhost/IPv6 quirks.
    host: true,
  },
})
