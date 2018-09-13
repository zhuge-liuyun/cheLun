<template>
  <div>
    <header><span @click="ColorFun()">颜色</span><span>车款</span></header>
    <div class="content">
      <ul>
        <li v-for="(item,index) in list.data" :key="index">
          <div class="p_text">
            <p>{{item.Name}}</p>
            <p>{{item.Count}}张图片</p>
          </div>
          <div class="html" v-for="(val,ind) in item.List" alt="" :key="ind">
            <img :src="val.Url.replace('{0}','3')">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'
  export default {
    computed: {
      ...mapState({
        list: state => state.img.list
      })
    },
    //映射数据
    methods: {
      ...mapActions({
        getImg: 'img/getImg'
      }),
ColorFun(){
  this.$router.push({path:'/Color'})
}
    },
    //调用Vuex方法
    mounted() {
      console.log()
      this.getImg(this.$route.query.id)
    },
  }

</script>
<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  header {
    width: 100%;
    height: .9rem;
    border-bottom: 1px solid #ccc;
    display: flex;

    span {
      flex: 1;
      text-align: center;
      line-height: .9rem;
      font-size: .3rem;
    }
  }

  .content {
    width: 100%;
    height: auto;

    ul {
      width: 100%;
      height: auto;

      li {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        border-bottom: 1px solid #ccc;
        position: relative;

        .html {
          width: 30%;
          height: auto;
          margin-right: .15rem;

          img {
            width: 100%;
            height: auto;

          }
        }

        .p_text {
          position: absolute;
          left: 0;
          top: 0;
          width: 30%;
          height: 50%;
          background:rgba(0,0,0,.4);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          p {
            text-align: center;
            font-size: .2rem;
            color: #fff;
          }
        }
      }
    }
  }

</style>
