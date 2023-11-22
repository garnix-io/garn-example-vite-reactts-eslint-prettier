import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/garn-example-vite-reactts-eslint-prettier/',
  plugins: [react()],
});
