import { resolve } from 'path';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-vue-starter/',
  plugins: [
    vue(),
    unocss(),
    autoImport({
      imports: ['vue', 'vue-router'],
      dts: './src/typings/auto-import.d.ts',
      vueTemplate: true
    })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  }
});
