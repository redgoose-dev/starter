import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'

const pathSrc = resolve(__dirname, 'src');

// docs: https://vitejs.dev/config

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    // https://vitejs.dev/config/#server-options
    server: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      open: false,
    },
    build: {
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks: {},
        },
      },
    },
    preview: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
    },
    resolve: {
      alias: {
        '~': `${pathSrc}`,
      },
    },
    define: {},
    css: {},
    // https://vitejs.dev/guide/api-plugin.html
    plugins: [
      react(),
    ],
  }
});
