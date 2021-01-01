import Vue from 'vue'
import VueRouter from 'vue-router'

import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Typography from "@/pages/Typography.vue";
import CardsList from "@/pages/CardsList.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
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
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "cards-list",
        name: "cards list",
        component: CardsList
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
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
