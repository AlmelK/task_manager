import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faAddressBook } from '@fortawesome/free-regular-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'


library.add(faAddressBook, faCalendarDays)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
