import {
  getCityList
} from '../../api/index'
let state = {

  provinces: [],
  cities: [],
  isShowCity: false
}
//调用方法并改变state的值
let mutations = {
  listJson(state, payload) {
    state.cities = payload.data;
    state.isShowCity = true
  },
  updataProvirnce(state, payload) {
     console.log(payload)
    state.provinces = payload.data;
  },
  hideCity(state,payload){
    state.isShowCity=false;
  }
}
//请求数据
let actions = {
  getCityList({
    commit
  }, payload) {
    console.log(11)
    if (payload) {
      getCityList(payload)
        .then(body => {
            console.log(body)
          commit('listJson', body)
        })
    } else {
      getCityList()
        .then(body => {
          commit('updataProvirnce', body)
        })
    }

  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
