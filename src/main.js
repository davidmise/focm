import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

// .component('font-awesome-icon', FontAwesomeIcon)

import 'jquery/dist/jquery.js';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import App from './App.vue'
import router from './router'

const app = createApp(App)

// bootsrap(css/js)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// icons
import 'bootstrap-icons/font/bootstrap-icons.css';




app.use(createPinia())
app.use(router)

app.mount('#app')

// Initialize AOS
AOS.init();
