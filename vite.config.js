import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Merge the configurations together
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-redux']
      // Add other external dependencies if needed
    }
  }
});
