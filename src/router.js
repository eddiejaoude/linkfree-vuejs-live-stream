import { createRouter, createWebHashHistory } from 'vue-router'

import UserList from './views/UserList.vue'
import UserProfile from './views/UserProfile.vue'

const routes = [
  { name: 'userList', path: '/', component: UserList },
  { name: 'userProfile', path: '/users/:username', component: UserProfile },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
