// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    resources: 0,
    clicks: 0
  },
  mutations: {
    incrementResources(state, amount) {
      state.resources += amount;
    },
    incrementClicks(state) {
      state.clicks += 1;
    }
  },
  actions: {
    gather({ commit }) {
      commit('incrementClicks');
      commit('incrementResources', 1); // Adjust the increment as needed
    }
  },
  getters: {
    resources: (state) => state.resources,
    clicks: (state) => state.clicks
  }
});
