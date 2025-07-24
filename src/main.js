import { createApp } from 'vue'
import './style.css'
import App from './layout/App.vue'

import router from './router'
import Marquee from 'vue3-marquee'
import i18n from './i18n';

const app = createApp(App)

app.use(router)

// ✅ Register marquee globally
app.component('Marquee', Marquee)
app.use(i18n);
app.mount('#app')
