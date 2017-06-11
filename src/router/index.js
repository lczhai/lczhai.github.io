import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index/index.vue'
import resume from '../view/resume/resume.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/resume',
            name: 'resume',
            component: resume
        }
    ]
})