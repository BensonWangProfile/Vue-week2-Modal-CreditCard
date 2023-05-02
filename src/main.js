import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Loading overlay
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Loading)

app.mount('#app')
