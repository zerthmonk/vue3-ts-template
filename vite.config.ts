import process from 'node:process';
import type { configEnv } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import UnoCSS from 'unocss/vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: configEnv }) => {
  const env = loadEnv(mode, process.cwd());

  const HOST = env.VITE_HOST || 'http://localhost';
  const PORT = Number.parseInt(env.VITE_PORT) || 3000;

  return {
    server: {
      host: HOST,
      port: PORT,
    },
    plugins: [
      UnoCSS(),
      vue(),
    ],
  };
});
