import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.scss'
import '@/styles/tailwind.css'
import '@cz-design/component/index.scss'
import AcDesign from '@cz-design/component'

const app = createApp(App)
app.use(AcDesign)
app.use(router)
app.mount('#app')
