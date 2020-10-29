import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome , faShoppingCart,  faCaretDown, faPhone, faMapMarkerAlt, faUser, faMobileAlt, faEnvelope, faExclamationCircle, faCheckCircle, faSearch} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faHome , faShoppingCart, faFacebookF , faInstagram, faCaretDown, faPhone, faMapMarkerAlt, faWhatsapp, faUser, faMobileAlt, faEnvelope, faExclamationCircle, faCheckCircle, faSearch, faClock)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)