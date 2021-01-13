import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import home from '../views/Home.vue'
import Video from '../views/Video.vue'
import movierouter from './movie/index.js'
import minerouter from './mine'
import cinemarouter from './cinema'
const routes = [
  movierouter,
  minerouter,
  cinemarouter,
  {
    path: '/',
    redirect: '/movie'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
