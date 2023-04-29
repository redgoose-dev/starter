import path from 'path'
import { defineConfig, loadEnv } from 'vite'

// docs: https://vitejs.dev/config

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    resolve: {
      alias: [
        {
          find: '~',
          replacement: path.resolve(__dirname, 'src'),
        }
      ],
    },
    server: {
      host: env.VITE_HOST || '0.0.0.0',
      port: Number(env.VITE_PORT) || 3000,
      open: env.VITE_OPEN_BROWSER === 'true',
      proxy: {
        // https://vitejs.dev/config/#server-proxy
        // '/api': {},
      },
    },
    plugins: [
      //
    ],
  }
})
