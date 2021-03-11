import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.less'
import router from './router/index'
import store from './store/index'

createApp(App)
.use(router)
.use(store)
.mount('#app')
