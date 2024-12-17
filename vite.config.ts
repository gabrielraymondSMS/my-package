import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts', // Titik masuk package
      name: 'MyPackage',       // Nama global ketika digunakan via CDN
      fileName: (format) => `my-package.${format}.js`, // Nama file output
    },
    rollupOptions: {
      // Jika package menggunakan eksternal dependensi
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
