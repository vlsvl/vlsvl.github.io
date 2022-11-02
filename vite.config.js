import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

const path = require('path')

export default defineConfig({
  plugins: [
    vue(),
  ],
  define: {'process.env': {}},
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
});
