import movie from '@/views/Movie/Movie.vue'
export default {
  path: '/movie',
  component: movie,
  children: [{
      path: 'nowPlaying',
      component: () => import('@/components/NowPlaying')
    },
    {
      path: 'comingSoon',
      component: () => import('@/components/ComingSoon')
    },
    {
      path: 'search',
      component: () => import('@/components/Search')
    },
    {
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: '/movie',
      redirect: '/movie/nowplaying'
    }
  ]
}
