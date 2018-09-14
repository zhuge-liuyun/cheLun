<template>
  <div class="app">
    <div class="box">
      <section>
        <ul v-for="(item,index) in list" :key="index">
          <p :id="index">{{index}}</p>
          <li>
            <dl v-for="(val,ind) in item" :key="ind" @click="getMakeList(val.MasterID)">
              <dt><img :src="val.CoverPhoto" alt=""></dt>
              <dd><span>{{val.Name}}</span></dd>
            </dl>
          </li>
        </ul>
      </section>
    </div>
    <div class="text" v-if="isName">
      {{name}}
    </div>

    <ol class="ol" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <li v-for="(item,index) in arr" :key="index">
        {{item}}
      </li>
    </ol>
    <makelList></makelList>
  </div>
</template>
<script>
  import makelList from './compon/makeList'
  import lazyLoad from '../util/lazyLoad.js'
  import {
    mapState,
    mapActions,
    mapMutations
  } from "vuex";
  export default {

    info: {
      marginTop: 0
    },
    //调用方法
    mounted() {
      //console.log(store.state.app.list);
      this.$store.dispatch("app/getData");
    },
    computed: {
      ...mapState({
        list: state => state.app.list,
        arr: state => state.app.arr,
        name: state => state.app.name,
        isName: state => state.app.isName,
        
      })
    },
    components: {
      makelList
    },
    //定义事件方法
    methods: {
      ...mapActions({
        getData: "app/getData",
        getMakeList: 'app/getMakeList'
      }),
      ...mapMutations({
        changeName: 'app/changeName',
        showName: 'app/showName'
      }),
      touchStart() {
        this.showName(true)
      },
      //手指滑动时的事件
      touchMove(e) {

        if (e.target.tagName == "LI") {
          let letter = e.target.innerText;
        }
        //获取当前手指距离浏览器顶端的距离
        let pageY = e.touches[0].pageY;
        //获取当前手指滑动到哪一个元素上面(index是当前元素的下标)
        let index = Math.floor((pageY - this.marginTop) / this.height);

        //设置滑动界限
        if (index < 0) {
          index = 0;
        } else if (index > this.arr.length - 1) {
          index = this.arr.length - 1;
        }
        //获取当前id元素并求出它距离浏览器顶端的距离
        let ele = document.getElementById(this.arr[index]);
        let top = ele.offsetTop;
        console.log(top);
        this.changeName(this.arr[index])
        // console.log(this.name);
        // 让滚动的父元素直接滚动到当前id元素距离浏览器顶端的距离
        document.querySelector(".box").scrollTop = top;
      },
      //手指滑离事件
      touchEnd() {
        this.showName(false)
      },
      // getMakeList() {
      //   console.log(this.isLogin)
      //   if (!this.isLogin) {
       
      //     //  alert('您还没有登录请登录页面')
      //     this.$router.push({
      //       path: '/Login'
      //     })
      //   } else {
         
      //   }
      // }
    },
    //组件更新之后
    updated() {
      this.height = 0.5 * window.innerWidth / 750 * 100;
      this.marginTop = (window.innerHeight - this.arr.length * this.height) / 2;
      lazyLoad('.box')
    }
  };

</script>

<style lang="scss">
  @import url("../scss/style.css");

  .app {
    width: 100%;
    height: 100%;

  }

  .box {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }

  section {
    height: auto;

    &>ul {
      width: 100%;

      &>p {
        width: 90%;
        height: 1rem;
        margin: 0 auto;
        line-height: 1rem;
        border-bottom: 1px solid #ccc;
        font-size: .4rem;
      }

      &>li {
        width: 100%;

        &>dl {
          width: 90%;
          height: 1rem;
          display: flex;
          margin: 0 auto;
          border-bottom: 1px solid #ccc;
          margin-top: .1rem;

          dt {
            width: 1rem;
            height: 1rem;

            img {
              width: 1rem;
              height: 1rem;
            }
          }

          dd {
            flex: 1;
            height: 100;

            span {
              display: block;
              line-height: 1rem;
              margin-left: .5rem;
              font-size: .4rem;

            }
          }
        }
      }
    }
  }

  .ol {
    width: .5rem;
    height: auto;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 0;

    li {
      width: 100%;
      height: .5rem;
      text-align: center;
      line-height: .5rem;
      font-size: .4rem;
    }
  }

  .text {
    width: .8rem;
    height: .8rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    background: rgba(0, 0, 0, .3);
    text-align: center;
    line-height: .8rem;
    font-size: .3rem;
    color: #fff;
  }

</style>
