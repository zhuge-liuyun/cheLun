import {
  getBrandList,
  getMakeList,
} from '../../api/index'
//数据区域
let state = {
  list: {}, //获取列表数据
  arr: [], //获取字母
  name: '', // 当前选中的品牌字母
  isName: false, // 是否显示字母弹框
  brandId: '', //品牌id
  makeList: '', //车系列表
  isShowList: false, //是否显示车系
  
  
  // info: {}, //详情页数据
  // year: [], //详情页年份
  // yearJson: '全部',
  // json: {},
}
// let getters = {
//   // years(state) {
//   //   console.log(state.info)
//   //   if (!state.info.list) {
//   //     return [];
//   //   }
//   //   let arr = state.info.list.map(item => {
//   //     return item.market_attribute.year;
//   //   });
//   //   let set = new Set(arr);
//   //   return ['全部', ...set]
//   // },
//   list(state) {
//     if (!state.info.list) {
//       return [];
//     }
//     function merge(arr) {
//       let types = [];
//       let obj = {};
//       arr.forEach(item => {
//         let type = item
//         if (types.indexOf(type) == -1) {
//           types.push(type);
//           obj[type] = [item]
//         } else {
//           obj[type].push(item)
//         }
//       })
     
//       return obj;
//     }
//     if (state.yearJson == '全部') {
//       console.log(state.info.list)
//       return merge(state.info.list);
//     } else {
//       return merge(state.info.list.filter(item => {
//         return item.market_attribute.year == state.yearJson;
//       }))
//     }
//   }
// }
//更改数据(改变state的唯一方法)
let mutations = {
  // json(state,payload){
  //     //   console.log(payload)
  //     // state.list = payload.data
  //     //  console.log(state.list) 
  // },
  fetchList: (state, payload) => {
    // console.log(payload)
    let arr = [];
    let json = {}
    payload.forEach(item => {
      let title = item.Spelling[0]
      if (arr.indexOf(title) == -1) {
        arr.push(title);
        json[title] = [item]
      } else {
        json[title].push(item)
      }
    });
    // console.log(json,arr)
    state.list = json;
    state.arr = arr
    //console.log(arr)
  },
  //控制字母显示跟隐藏
  showName: (state, payload) => {
    state.isName = payload
  },
  //改变字母
  changeName: (state, payload) => {
    state.name = payload
  },
  //显示车系数据
  changeMakeList: (state, payload) => {
    state.brandId = payload.id;
    state.makeList = payload.list;
    state.isShowList = true;
  },
  hideMakeList: (state) => {
    state.isShowList = false;
  },
  //详情页数据
  // changeDetailList: (state, payload) => {
  //   // console.log(payload)
  //   state.json = payload.list;
  //   payload.list.list.sort((a, b) => {
  //     //先按年份排序（降序）
  //     if (a.market_attribute.year != b.market_attribute.year) {
  //       return b.market_attribute.year - a.market_attribute.year
  //     } else {
  //       //升序排（汽车排量）
  //       if (b.exhaust > a.exhaust) {
  //         return -1;
  //       } else if (b.exhaust < a.exhaust) {
  //         return 1;
  //       } else {
  //         //按照功率排序 （升序）
  //         if (b.max_power > a.max_power) {
  //           return -1;
  //         } else if (b.max_power < a.max_power) {
  //           return 1;
  //         } else {
  //           if (b.market_attribute.dealer_price_min > a.market_attribute.dealer_price_min) {
  //             return -1;
  //           } else {
  //             return 1;
  //           }
  //         }
  //       }
  //     }
  //   });
  //   // console.log(payload.list)
  //   state.info = payload.list;
  //   let yearArr = ['全部选择'];
  //   // let yearArrList = {};
  //   payload.list.list.forEach(item => {
  //     // console.log(item.market_attribute.year)
  //     if (yearArr.indexOf(item.market_attribute.year) == -1) {
  //       yearArr.push(item.market_attribute.year);
  //     } 
  //   });
  //   // state.info = yearArrList
  //   state.year = yearArr;
  //   // console.log(yearArrList)
  // },
  // clickYear: (state, payload) => {
  //   console.log(payload)
  //   state.yearJson = payload;
  // }
}


let actions = {
  getData(state) {
    getBrandList().then(
      body => {
        // console.log(body)
        state.commit('fetchList', body.data)
      })
  },
  getMakeList({
    commit,
    state
  }, payload) {
    console.log(payload)
    state.isShowList=true
    if (payload != state.brandId) {
      // console.log(payload)
      getMakeList(payload).then(body => {
        // console.log(body.data);
        commit('changeMakeList', {
          id: payload,
          list: body.data
        })
      })
    }else{
      state.isShowList=true;
    }

  },

  // detailList({
  //   commit,
  //   state
  // }, payload) {
  //   if (payload != state.brandId) {
  //     //  console.log(payload)
  //     detailList(payload).then(body => {
  //       // console.log(body.data);
  //       commit('changeDetailList', {
  //         id: payload,
  //         list: body.data
  //       })
  //     })
  //   }
  // }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  
}
