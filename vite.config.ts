const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    hmr:true
    // cors:true,
  },
  plugins: [vue(),
    // 这里控制按需加载antdv
    // styleImport({
    //   libs: [{
    //     libraryName: 'ant-design-vue',
    //     esModule: true,
    //     resolveStyle: (name) => {
    //       return `ant-design-vue/es/${name}/style/index.less`;
    //     },
    //   }]
    // })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 这里改antdv覆盖样式
          // https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less
          // 'primary-color': '#1DA57A',
          // 'link-color': '#1DA57A',
          // 'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      },
    },
  }
})
