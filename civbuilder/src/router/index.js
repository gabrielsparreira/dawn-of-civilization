// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import GameView from '@/views/GameView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/game', name: 'Game', component: GameView },
  { path: '/about', name: 'About', component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
