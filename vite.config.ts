import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import pxtovw from 'postcss-px-to-viewport'

const loder_pxtovw = pxtovw({
  viewportWidth: 375,
  viewportUnit: 'vw',
  propList: ['*'] // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [loder_pxtovw]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
