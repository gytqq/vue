import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '.views/home'

Vue_use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        }
    ]
})