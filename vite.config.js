import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // Optional: Add global SCSS imports if needed
        // additionalData: `@import "./src/styles/global.scss";`
      },
    },
  },
});