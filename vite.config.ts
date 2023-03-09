import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import viewport from 'postcss-mobile-forever'

const loader_viewport = viewport({
  rootSelector: "#root",
  viewportWidth: 375, // 设计稿宽度
  maxDisplayWidth: null, // 限制视口单位最大宽度
  propList: ['*'],
  disableDesktop: false, // 关闭桌面端媒体查询适配
  disableLandscape: false, // 关闭横屏媒体查询适配
  border: true, // 桌面端和横屏展示边框
  mobileConfig: {
    viewportUnit: 'vw', // 移动端单位
    replace: true, // 是否替换
    fontViewportUnit: 'vw', // 移动端字体单位
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [loader_viewport],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
