import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Main from './components/Main.vue'
import Experiencia from './components/Experiencia.vue'
import Habilidades from './components/Habilidades.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Main
  }, {
    path: '/experiencia',
    component: Experiencia
  }, {
    path: '/habilidades',
    component: Habilidades
  }]

})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')