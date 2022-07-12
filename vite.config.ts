import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

// docs: https://vitejs.dev/config

export default defineConfig(({ mode }): any => {
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
    define: {},
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
  };
});
