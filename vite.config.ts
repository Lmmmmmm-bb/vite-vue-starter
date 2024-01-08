import { resolve } from 'node:path';
import unocss from 'unocss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';
import autoImport from 'unplugin-auto-import/vite';
import vueComponents from 'unplugin-vue-components/vite';
import devtools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  // github pages base url
  // if you using Vercel to deploy, you can remove next line
  base: '/vite-vue-starter/',
  test: { environment: 'jsdom' },
  plugins: [
    vue(),
    unocss(),
    devtools(),
    autoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        'vitest',
        '@vueuse/core',
        '@vueuse/head',
      ],
      dts: './src/typings/auto-import.d.ts',
      vueTemplate: true,
    }),
    vueComponents({ dts: './src/typings/components.d.ts' }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
});
