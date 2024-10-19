import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Icône de type 'solid' */
import {
  faShoppingBag,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons'

/* Icône de type 'regular' */
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'

library.add(faUser, faHeart, faShoppingBag, faStar, faStarHalfAlt)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
