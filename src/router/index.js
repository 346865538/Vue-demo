import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/weather'
import Movie from '@/components/movie'
import Hoting from '@/components/movie_hoting'
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
    	path: '/movie_hoting',
    	name: 'movie_hoting',
    	component: Hoting
    }
  ]
})