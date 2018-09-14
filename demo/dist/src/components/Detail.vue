<template>
  <div>
    <img :src="json.CoverPhoto" alt="" @click="imgFun(id)">
    <li class="year">
      <span @click="changeYear(item)" v-for="(item, index) in years" :key="index" :class="currentYear==item?'active':''">{{item}}</span>
    </li>
    <section>
      <ul v-for="(item, index) in list" :key="index">
        <p>{{index}}</p>
        <li @click="clickFun()" v-for="(value, key) in item" :key="key">
          <p>{{value.market_attribute.year+'款 '+value.car_name}}</p>
          <p>{{`${value.max_power}马力${value.gear_num}档${value.trans_type}`}}</p>
          <p>
            <span>{{`指导价${value.market_attribute.dealer_price_min}`}}</span>
            <span>{{value.market_attribute.official_refer_price}}</span>
          </p>
          <p @click="clickFunP(json,key)">询问低价</p>
          <footer>
            <h2>询问低价</h2>
            <h4>本地经销商为你报价</h4>
          </footer>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex';
  export default {
    data() {
      return {
        id: ''
      }
    },
    computed: {
      ...mapState({
        currentYear: state => state.detail.currentYear,
        json: state => state.detail.json,
        isLogin: state => state.detail.isLogin
      }),
      ...mapGetters({
        years: 'detail/years',
        list: 'detail/list'
      })
    },
    methods: {
      ...mapActions({
        getDetailList: 'detail/getDetailList'
      }),
      ...mapMutations({
        changeYear: 'detail/changeYear',
      }),
      clickFun(json) {
        let user = window.localStorage.getItem('user');
        if (!user) {
          alert('您还没有登录，请前往等于页！')
          this.$router.push({
            path: '/Login',
            query: {
              json
            }
          })
        }
      },
      imgFun(id) {
        this.$router.push({
          path: '/imgClore',
          query: {
            id
          }
        })
      },
      clickFunP(json,key) {
        this.$router.push({
          path: '/detailcrole',
          query: {
            json,key
          }
        })
      }
    },
    mounted() {
      this.getDetailList(this.$route.query.id);
      this.id = this.$route.query.id
      // console.log(this.$route)
    },
  }

</script>

<style lang="scss">
  img {
    width: 100%;
    height: auto;
  }

  li {
    list-style: none;

    span {
      padding-right: .46rem;
    }
  }

  .year {
    border-top: .15rem solid #f4f4f4;
    font-size: .32rem;
    height: .77rem;
    line-height: .77rem;
    background: #fff;
  }

  .year .active {
    color: #3aacff;
  }

  ul>p {
    height: .5rem;
    line-height: .5rem;
    font-size: .26rem;
    color: #999;
    background: #f4f4f4;
  }

  ul>li {
    border-bottom: .18rem solid #f4f4f4;
    overflow: hidden;

    p:nth-child(1) {
      padding: .26rem 0 .18rem;
      font-size: .3rem;
      line-height: 1;
      color: #3d3d3d;
    }

    p:nth-child(2) {
      color: #bdbdbd;
      font-size: .26rem;
    }

    p:nth-child(3) {
      text-align: right;
      padding-bottom: .1rem;
      font-size: .24rem;
      color: #818181;

      span:nth-child(2) {
        font-size: .3rem;
        color: #ff2336;
        margin-left: .1rem
      }
    }

    p:nth-child(4) {
      height: .6rem;
      border-top: 1px solid #ccc;
      color: #3aacff;
      font-size: .4rem;
      text-align: center;
      line-height: .6rem;
    }
  }

  ul>li:last-child {
    border-bottom: 0;
  }

  footer {
    width: 100%;
    height: .8rem;
    background: #3aacff;
    position: fixed;
    bottom: 0;
    left: 0;

    h2 {
      font-size: .3rem;
      width: 100%;
      height: .4rem;
      text-align: center;
      line-height: .4rem;
      color: #fff;
    }

    h4 {
      font-size: .28rem;
      width: 100%;
      height: .4rem;
      text-align: center;
      line-height: .4rem;
      color: #fff;
    }
  }

</style>
