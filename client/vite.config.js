import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',  // This makes '@' refer to '/src'
    },
  },
});
