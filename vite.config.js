import { defineConfig, loadEnv } from 'vite';

// docs: https://vitejs.dev/config

const config = defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      // https://vitejs.dev/config/#server-options
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      open: env.VITE_OPEN_BROWSER === 'true',
    },
    build: {
      // https://vitejs.dev/config/#build-options
    },
    preview: {
      // https://vitejs.dev/config/#preview-options
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
    },
    define: {
      'TITLE': JSON.stringify(env.VITE_TITLE),
    },
    plugins: [],
  };
});

export default config;
