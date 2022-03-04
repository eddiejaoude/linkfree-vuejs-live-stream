import { createRouter, createWebHashHistory } from 'vue-router'

import UserList from './views/UserList.vue'
import UserProfile from './views/UserProfile.vue'

const routes = [
  { path: '/', component: UserList },
  { path: '/users/:username', component: UserProfile },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
