import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={//要设置的全局访问的state对象
  tabbar:"home",
  detailData:{},
  username:'',
  code:'',
  avatar:'',
  name:''
};
const getters = {

}
const mutations = {
  SET_PAGE(state,page){
    state.tabbar = page;
  },
  SET_USER(state,data){
    console.log("viexxxx",data)
    state.username = data.username;
    state.name = data.name;
    state.avatar = data.avatar;
    state.code = data.code
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations
});
 
export default store;