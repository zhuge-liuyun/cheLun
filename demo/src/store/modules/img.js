import {getImg} from '../../api/index'

let state={
     list:{}
}
let mutations={
     getImg:(state,payload)=>{
         console.log(payload)
         state.list=payload
     }
}
let actions={
    getImg({commit},payload){
        getImg(payload).then(body=>{
             console.log(payload)
            commit('getImg',body)
        })
    }
}
export default {
   namespaced: true,
   state,
   mutations,
   actions
}