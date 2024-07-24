import { defineConfig, loadEnv } from 'vite';
import UnoCSS from 'unocss/vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const HOST = env.VITE_HOST || 'http://localhost';
  const PORT = parseInt(env.VITE_PORT) || 3000;

  return {
    server: {
      host: HOST,
      port: PORT,
    },
    plugins: [
      UnoCSS(),
      vue(),
    ],
  }
})
