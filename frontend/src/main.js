import { createApp } from 'vue'
import './style.css'
import router from './router/index.js'

import App from './App.vue'

const app = createApp(App)

import axios from 'axios';

app.config.productionTip = false;






axios.defaults.baseURL = 'http://localhost:3000/users';



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faUserSecret, faFacebookF, faLinkedinIn)
library.add(faTwitter)


app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
