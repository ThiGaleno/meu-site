import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Main from './components/Main.vue'
import Experiencia from './components/Experiencia.vue'
import Habilidades from './components/Habilidades.vue'
import Cursos from './components/Cursos.vue'
import Livros from './components/Livros.vue'
import Pessoal from './components/Pessoal.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: '/',
      component: Main
    },
    {
      path: '/experiencia',
      component: Experiencia
    },
    {
      path: '/habilidades',
      component: Habilidades
    },
    {
      path: '/cursos',
      component: Cursos
    },
    {
      path: '/livros',
      component: Livros
    },
    {
      path: '/vida-pessoal',
      component: Pessoal
    }
  ]

})

Vue.config.productionTip = false

new Vue({
  data: {

    info: ''
  },
  router,
  render: h => h(App),
}).$mount('#app')