import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import scss from 'sass'

const resolve = (p: string) => {
  return path.resolve(__dirname, p)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: scss,
        additionalData: '@import "./src/scss/variables";',
      },
    },
  },
  resolve: {
    alias: {
      '@components': resolve('./src/components'),
      '@hooks': resolve('./src/hooks'),
      '@pages': resolve('./src/pages'),
      '@utils': resolve('./src/utils'),
      '@api': resolve('./src/api'),
      '@schemas': resolve('./src/schemas'),
      '@atoms': resolve('./src/atoms'),
      '@scss': resolve('./src/scss'),
      '@services': resolve('./src/services'),
    },
  },
  envPrefix: 'BR',
})
