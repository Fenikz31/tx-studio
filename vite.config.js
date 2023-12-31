import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve:{
    alias: {
      '@assets': path.resolve( __dirname, './src/assets' ),
      '@components': path.resolve( __dirname, './src/components' ),
      '@icons': path.resolve( __dirname, './src/components/icons' )
    }
  },
  server: {
    hmr: {
      overlay: false
    },
    port: 4500
  }
});
