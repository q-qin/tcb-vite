const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/vite/',
  resolve:{
    alias:{
      '@':path.resolve(__dirname, './src')
    }
  },
  server:{
    port:3000,
    // cors:true,
  },
})
