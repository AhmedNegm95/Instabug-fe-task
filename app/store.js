import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teamPerformanceChartPoints: [],
  },
  getters: {
    teamPerformanceChartPoints(state) {
      return state.teamPerformanceChartPoints;
    },
  },
  mutations: {
    setTeamPerformanceChartPoints(state, payload) {
      state.teamPerformanceChartPoints = payload;
    },
  },
});
