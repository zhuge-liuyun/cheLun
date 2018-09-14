<template>
  <div>
    <router-view />
    <div class="wrapper animated flipInY">
      <div class="logo"><a href="#"><i class="fa fa-bolt"></i> <span>Maniac</span></a></div>
      <div class="box">
        <div class="header clearfix">
          <div class="pull-left"><i class="fa fa-sign-in"></i> Sign In</div>
          <div class="pull-right"><a href="#"><i class="fa fa-times"></i></a></div>
        </div>
        <form id="loginform" method="post" action="index.html">
          <div class="alert alert-warning no-radius no-margin padding-sm"><i class="fa fa-info-circle"></i> Please sign
            in
            to maniac dashboard</div>
          <div class="box-body padding-md">
            <div class="form-group">
              <input type="text" name="username" class="form-control" placeholder="请输入账号" ref="user" />
            </div>
            <div class="form-group">
              <input type="password" name="password" class="form-control" placeholder="请输入密码" ref="pwd" />
            </div>
            <div class="form-group">
              <input type="checkbox" /> <small>是否记住密码</small>
            </div>
            <div class="box-footer">
              <button type="button" class="btn btn-success btn-block" @click="clickFun">登录</button>
            </div>
          </div>
        </form>
      </div>
      <div class="box-extra clearfix">
        <a href="#" class="pull-left btn btn-xs">忘记密码？</a>
        <a href="register.html" class="pull-right btn  btn-xs">注册一个账户</a>
      </div>

      <footer>
        Copyright &copy; 2014 by YAKUZI.

        <ul class="list-unstyled list-inline">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">UI Elements</a></li>
          <li><a href="#">Charts</a></li>
          <li><a href="#">Mobile Apps</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        user: '123456',
        pwd: '654321'
      }
    },
    //定义方法
    methods: {

      clickFun() {
        _hmt.push(['_trackEvent', '蓝丝带传递爱', 'tap', '按钮点击']);

        //用户名，4到16位（字母，数字，下划线，减号）
        var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
        //密码,8到16位数字与字母组合
        var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if (this.$refs.user.value == '' || this.$refs.pwd.value == '') {
          alert('你的账号或密码不能为空!')
        } else {
          if (this.$refs.user.value !== this.user || !this.$refs.pwd.value == this.pwd) {
            alert('你输入的账号或密码有误')
          } else {
            alert('登录成功!');
            let user = window.localStorage.setItem('user', this.$refs.user.value);
            this.$router.push({
              path: '/index'
            })
          }
        }
      }
    }
  }

</script>
<style>
  @import url("../css/bootstrap.min.css");
  @import url("../css/font-awesome.min.css");
  @import url("../css/animate/animate.min.css");
  @import url("../css/bootstrapValidator/bootstrapValidator.min.css");
  @import url("../css/iCheck/all.css");
  @import url("../css/style.css");

</style>
