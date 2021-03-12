import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'ant-design-vue/dist/antd.less';
import './styles/index.less'
import './permission'

createApp(App)
.use(router)
.use(store)
.mount('#app')
