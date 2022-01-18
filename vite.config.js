import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

// docs: https://vitejs.dev/config

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
      open: env.VITE_OPEN_BROWSER === 'true',
      proxy: {
        // https://vitejs.dev/config/#server-proxy
        // '/api': {},
      },
    },
    define: {
      'TITLE': JSON.stringify(env.VITE_TITLE),
      'DEBUG': JSON.stringify(env.VITE_DEBUG === 'true'),
    },
    build: {
      rollupOptions: {},
    },
    preview: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess(),
      }),
    ],
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
        ],
      },
    },
  };
});
