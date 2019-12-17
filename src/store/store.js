import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={//要设置的全局访问的state对象
    Mudata:{},
};
const getters = {
  getMudata(state){
    return state.Mudata
  }
}
const mutations = {
  setMudata(state,data){
    state.Mudata = data
  }
}
const store = new Vuex.Store({
  state,
  getters,
  mutations
});
 
export default store;