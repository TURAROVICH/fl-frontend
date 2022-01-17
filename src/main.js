import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


//components
import AuthLayout from './layouts/auth.vue'
Vue.component('AuthLayout',AuthLayout)
import Field from './components/field.vue'
Vue.component('Field',Field)

//styles
import './assets/styles/index.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
