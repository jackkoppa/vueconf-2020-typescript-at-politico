import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/codegen',
    name: 'codegen',
    children: [
      {
        path: '/',
        name: 'intro',
        component: () =>
          import(
            /* webpackChunkName: "codegenIntro" */ '@/components/codegen/CodegenIntro.vue'
          )
      },
      {
        path: 'movies',
        name: 'movies',
        component: () =>
          import(
            /* webpackChunkName: "movies" */ '@/components/codegen/Movies.vue'
          )
      },
      {
        path: 'candidates',
        name: 'candidates',
        component: () =>
          import(
            /* webpackChunkName: "candidates" */ '@/components/codegen/Candidates.vue'
          )
      }
    ],
    component: () =>
      import(
        /* webpackChunkName: "codegenPage" */ '@/views/CodegenPage.vue'
      )
  },
  {
    path: '/comparisons',
    name: 'comparisons',
    children: [
      {
        path: '/',
        name: 'intro',
        component: () =>
          import(
            /* webpackChunkName: "comparisonsIntro" */ '@/components/comparisons/ComparisonsIntro.vue'
          )
      },
      {
        path: 'simple-data',
        name: 'simpleData',
        component: () =>
          import(
            /* webpackChunkName: "simpleData" */ '@/components/comparisons/SimpleData.vue'
          )
      }
    ],
    component: () =>
      import(
        /* webpackChunkName: "comparisonsPage" */ '@/views/ComparisonsPage.vue'
      )
  }
]

const router = new VueRouter({
  routes
})

export default router
