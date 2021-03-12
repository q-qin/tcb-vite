import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.less';
import './styles/index.less'
import router from './router/index'
import store from './store/index'

createApp(App)
.use(router)
.use(store)
.mount('#app')
