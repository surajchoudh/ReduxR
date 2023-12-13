import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// vite.config.js
const config = {
  build: {
    rollupOptions: {
      external: ['react-redux']
      // Add other external dependencies if needed
    }
  }
};

export { config };
