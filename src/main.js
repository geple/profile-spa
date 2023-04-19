import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './index'

// ## Font Awesome Icons ----------------
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// Free solid
import { faG, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// Free brands
import { faCodepen, faGithub, faLinkedinIn, faSpotify } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faG, faEnvelope, faGithub, faLinkedinIn, faSpotify, faCodepen)
// ----------------------

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
