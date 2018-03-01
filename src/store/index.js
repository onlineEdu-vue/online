import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state={
  username:'',//要去获取用户名
  integral:'', //要去获取用户数据表的积分
}
const getters={
  count(state){
    return state.username
  }
}
const actions={
  getusername:({commit})=>{
    commit('getusername')
  },
  lear:({commit})=>{
    commit('golear')
  }
}
const mutations={
  setUserName(state,val) {
    state.username = val;
  },

}
export default new Vuex.Store({
  getters,
  actions,
  mutations,
  state,
})