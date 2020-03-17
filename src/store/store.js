import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={//要设置的全局访问的state对象
  tabbar:"home"
};
const getters = {

}
const mutations = {
  SET_PAGE(state,page){
    state.tabbar = page;
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations
});
 
export default store;