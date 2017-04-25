import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/weather'
import Movie from '@/components/movie'
import More from '@/components/movie_more'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'weather',
    	component: Weather
    },
    {
    	path: '/movie',
    	name: 'movie',
    	component: Movie
    },
    {
    	path: '/movie_more/:type',
    	name: 'movie_more',
    	component: More
    }
  ]
})