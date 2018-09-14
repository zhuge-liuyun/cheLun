<template>
  <div :class="isShowList?'box1 action':'box1'" ref="user" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
    <ul v-for="(item,index) in makeList" :key="index">
      <p>{{item.GroupName}}</p>
      <li v-for="(val,ind) in item.GroupList" :key="ind" @click="detailList(val.SerialID)">
        <img :src="val.Picture" alt="">
        <div class="user">
          <p>{{val.AliasName}}</p>
          <p>{{val.DealerPrice}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'
  export default {
    data() {
      return {
        id: ''
      }
    },
    computed: {
      ...mapState({
        makeList: state => state.app.makeList,
        isShowList: state => state.app.isShowList
      }),
    },
    methods: {
      ...mapMutations({
        hideMakeList: 'app/hideMakeList',
      }),
      touchstart(event) {
        this.touch = event.touches[0];
      },
      touchmove(event) {
        let touch = event.touches[0];
        // console.log(touch)
        this.offsetX = touch.pageX - this.touch.pageX;
        if (this.offsetX > 0) {
          this.$refs.user.style = `transform:translate3d(${this.offsetX}px, 0, 0)`;
        }
        // console.log('滑动距离：', this.offsetX, this.$refs.user);
      },
      touchend() {
        this.$refs.user.style = ``;
        if (this.offsetX > 100) {
          this.hideMakeList();
          this.$refs.user.style = `transform:translate3d(100%, 0, 0)`;
        }
      },
      detailList(id) {
        this.$router.push({
          path: '/Detail',
          query: {
            id
          }
        })
      },

    },
    //改变state的属性值
    mounted() {
      this.id = this.$route.query.item
    },
    updated() {
      // console.log(this.isShowList)
      if (this.isShowList) {
        this.$refs.user.style = `transform:translate3d(0, 0, 0)`;
      }
    },
  }

</script>

<style scoped>
  .box1 {
    position: fixed;
    right: 0;
    top: 0;
    width: 72%;
    height: 100%;
    overflow: scroll;
    background: #fff;
    transform: translate3d(100%, 0, 0);
    box-shadow: -3px 0px 10px 0px rgba(0, 0, 0, .1);
  }

  .box1>ul {
    margin-left: .1rem;
  }

  .box1>ul>li {
    height: 1.4rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
  }

  .box1>ul>li>p:nth-child(1) {
    font-size: .34rem;
    color: #5f687a;
  }

  .box1>ul>li>p:nth-child(2) {
    margin-top: .1rem;
    font-size: .28rem;
    color: red;
  }

  .box1>ul>p {
    margin-left: 1px;
    font-size: .28rem;
    line-height: .48rem;
    background: #f2f2f2;
    padding-left: .3rem;
    color: #717171;
  }

  .box1>ul>li>img {
    margin: 0 .1rem 0 .2rem;
    width: 1.8rem;
    height: 1.2rem;
  }

  .box1.action {
    transform: translate3d(0, 0, 0);
    transition: transform .3s linear;
  }

</style>
