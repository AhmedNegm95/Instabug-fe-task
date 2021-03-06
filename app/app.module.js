import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import store from './store.js';
import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import EmployeesFilterComponent from './components/vue-components/employees-filter.vue';
import NotFoundPageComponent from './pages/not-found-page.vue';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
  'core',
]).config(($ngVueProvider) => {
  $ngVueProvider.setRootVueInstanceProps({
    store: store,
  });
});

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vEmployeesFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('employeesFilterComponent', EmployeesFilterComponent));
});

angular.module('appModule').directive('vNotFoundPage', (createVueComponent) => {
  return createVueComponent(Vue.component('notFoundPageComponent', NotFoundPageComponent));
});
