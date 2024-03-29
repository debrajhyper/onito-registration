import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3030
  },
  // optimizeDeps: {
  //   include: ['react', 'react-dom'],
  //   exclude: ['@components/*'],
  // },
  plugins: [react(), tsconfigPaths()],
})
