import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {routes} from './router/index';
import * as _ from 'lodash';
import { state } from './store/state';
import { getters } from './store/getters';
import { mutations } from './store/mutations';
import { actions } from './store/actions';

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
