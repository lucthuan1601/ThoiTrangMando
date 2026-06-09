import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url' // 1. Thêm hàm chuyển đổi URL thành Path
import path from 'path'

// 2. Tự định nghĩa __dirname chuẩn cho môi trường ES Module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      // 3. Sử dụng __dirname trực tiếp (không có chữ path. ở trước)
      '@': path.resolve(__dirname, './src'),
    },
  },
})