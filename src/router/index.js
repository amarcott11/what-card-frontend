import Vue from 'vue'
import VueRouter from 'vue-router'

import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/views/NotFoundPage.vue";

// Main pages
import Home from "@/views/Home.vue";
import UserProfile from "@/views/UserProfile.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: Home
      },
      {
        path: "profile",
        name: "profile",
        meta: {
          auth: true
        },
        component: UserProfile
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      }
    ]
  },
  { path: "*", component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.auth) && !loggedIn) {
    next('/login')
    return
  }
  next()
})

export default router
