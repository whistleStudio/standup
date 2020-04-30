import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("components/Home")
const Settings = () => import("components/Settings")

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/settings",
    component: Settings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes 
})

export default router