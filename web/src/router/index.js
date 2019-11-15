import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/articles'
  },
  {
    path: '/articles',
    meta: {
      navIndex: 0
    },
    name: 'article-list',
    component: () => import(/* webpackChunkName: "articlesList" */ '../views/articles/list.vue')
  },
  {
    path: '/article/detail',
    meta: {
      navIndex: 0
    },
    name: 'article-detail',
    component: () => import(/* webpackChunkName: "articleDetail" */ '../views/articles/detail.vue')
  },
  {
    path: '/column',
    meta: {
      navIndex: 1
    },
    name: 'column-list',
    component: () => import(/* webpackChunkName: "columnList" */ '../views/column/list.vue')
  },
  {
    path: '/column/chapter',
    meta: {
      navIndex: 1
    },
    name: 'columnChapter',
    component: () => import(/* webpackChunkName: "columnChapter" */ '../views/column/chapter.vue')
  },
  {
    path: '/chapter/section',
    meta: {
      navIndex: 1
    },
    name: 'chapterSection',
    component: () => import(/* webpackChunkName: "chapterSection" */ '../views/column/section.vue')
  },
  {
    path: '/about',
    meta: {
      navIndex: 2
    },
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    // 兼容
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router
