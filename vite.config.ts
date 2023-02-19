import { resolve } from 'path';
import unocss from 'unocss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';
import autoImport from 'unplugin-auto-import/vite';
import vueComponents from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-vue-starter/',
  test: { environment: 'jsdom' },
  plugins: [
    vue(),
    unocss(),
    autoImport({
      imports: ['vue', 'vue-router', 'vitest', '@vueuse/core', '@vueuse/head'],
      dts: './src/typings/auto-import.d.ts',
      vueTemplate: true
    }),
    vueComponents({ dts: './src/typings/components.d.ts' })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  }
});
