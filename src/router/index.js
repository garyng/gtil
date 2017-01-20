import Vue from 'vue'
import VueRouter from 'vue-router'

import ListView from '../views/List.vue'
import PostView from '../views/Post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/gtil/',
    name: 'list',
    component: ListView
  },
  {
    path: '/gtil/post/:hash',
    name: 'post',
    component: PostView
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
