import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '@/views/Home.vue'
import Chat from '@/views/Chat.vue'
import Settings from '@/views/Settings.vue'
import ChatDetail from '@/views/ChatDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
    children: [
      {
        path: '/chat/:id',
        name: 'chat-detail',
        component: ChatDetail
      }
    ]
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})

export default router
