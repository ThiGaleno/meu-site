import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Main from './components/Main.vue'
import Experiencia from './components/Experiencia.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Main
  }, {
    path: '/experiencia',
    component: Experiencia
  }]

})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')