import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './components/LoginComponent.vue'
import Signup from './components/SignupComponent.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
        {
            path: '/Signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
    ]
})