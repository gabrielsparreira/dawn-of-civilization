// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
//import HomeView from '@/views/HomeView.vue';
import GameView from '@/views/GameView.vue';
//import AboutView from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    redirect: '/game' // Redirect root path to /game
  },
  {
    path: '/game',
    name: 'Game',
    component: GameView
  }/*,
  {
    path: '/about',
    name: 'About',
    component: AboutView
  }*/
  // You can keep HomeView if needed elsewhere
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: HomeView
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
