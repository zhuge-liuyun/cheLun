<template>
  <div class="detail">
    <header>可向多个商家咨询最低价，商家及时回复</header>
    <div class="img">
      <img :src="json.CoverPhoto" alt="">
      <h5>
        <span>{{json.AliasName}}</span>
        <span>{{json.list[key].car_name}}</span>
      </h5>
    </div>
    <ul>
      <li>
        <span>姓名</span><input type="text" placeholder="请输入您的真实中文姓名">
      </li>
      <li><span>手机</span><input type="text" placeholder="请输入您的真实手机号码"></li>
      <li><span>城市</span><span class="span" @click="cliclFun">北京</span></li>
    </ul>
    <button @click="lowest">询最低价</button>
    <city></city>
  </div>
</template>

<script>
import city from './city'
  export default {
    data() {
      return {
        json: {},
        key: ''
      }
    },
    computed: {},
    mounted() {
      this.json = this.$route.query.json;
      this.key = this.$route.query.key
      console.log(this.$route.query.json)
    },
    methods: {
      lowest() {
        alert('请先输入姓名')
      },
      cliclFun() {
        this.$router.push({
          path: '/city',
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .detail {
    width: 100%;
    height: auto;
    font-size: .14rem;

    header {
      height: .6rem;
      line-height: .6rem;
      width: 100%;
      background: #79cd92;
      text-align: center;
      z-index: 99;
      color: #fff;
    }

    &>p {
      width: 100%;
      height: .45rem;
      background: #79cd92;
      text-align: center;
      line-height: .45rem;
      font-size: .2rem;
      color: #fff;
    }

    .img {
      width: 100%;
      height: auto;
      display: flex;
      padding: .2rem;
      border-bottom: 1px solid #ccc;

      img {
        width: 2.5rem;
        height: 1.4rem;
        margin-right: .4rem;
      }


    }

    h5 {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;

      span {
        font-size: .3rem;

      }
    }

    ul {
      width: 100%;

      li {
        font-size: .32rem;
        height: .88rem;
        line-height: .88rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        color: #000;
        display: flex;
        margin-top: .3rem;

        input {
          font-size: .32rem;
          padding-right: .2rem;
          width: 88%;
          text-align: right;
          box-sizing: border-box;
          color: red;
          border: 0;
        }

        .span {

          display: inline-block;
          width: 88%;
          color: #555;
          text-align: right;
          box-sizing: border-box;

        }
      }
    }

    button {
      font-size: .32rem;
      color: #fff;
      width: 80%;
      background: #3aacff;
      height: .7rem;
      border-radius: .1rem;
      border: none;
      display: block;
      margin: 0 auto;
    }
  }

</style>
