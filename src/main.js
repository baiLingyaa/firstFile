import { createApp } from 'vue'
import './style.css'
import router from './router'

// svgIcon
import 'virtual:svg-icons-register'
import svgIcon from '@/components/svgIcon/index.vue'

// 导入Unocss
// import "uno.css";
import 'virtual:uno.css';


import App from './App.vue'

createApp(App).component('svg-icon', svgIcon).use(router).mount('#app')
