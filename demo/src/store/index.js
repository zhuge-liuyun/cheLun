import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import detail from './modules/detail'
import img from './modules/img'
import city from './modules/city'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        app,detail,img,city
    }
})