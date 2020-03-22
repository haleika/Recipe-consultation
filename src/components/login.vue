<template>
  <div class="login">
      
      <!-- <div class="img">
        <img :src="img" alt="">
      </div> -->

      <div class="input">
        <mt-field label="账号" placeholder="请输入账号" v-model="username"></mt-field>
        <!-- @focus.native.capture="foucsImg" -->
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"  @blur.native.capture="blurImg"></mt-field>
      </div>

      <div class="bottom">
        <router-link tag="mt-button" type="default" to="/user/regist">
          <mt-button class="bottom-item" type="danger" plain size="large">注册</mt-button>
        </router-link>
        <mt-button class="bottom-item" :disabled="disf" type="primary" @click="loginUser">登录</mt-button>
      </div>
  </div>
</template>

<script>
import { Field,Button,Toast  } from 'mint-ui';
import axios from "axios"
import qs from 'qs'
export default {
  name: 'userLogin',
  data () {
    return {
      username:"",
      password:"",
      // img:require("@/assets/img/2.png")
    }
  },
  components:{
    "mt-field": Field,
    "mt-button" : Button
  },
  computed:{
    disf(){
      if(this.username == ""||this.password==""){
        return true;
      }else{
        return false;
      }
    }
  },
  methods:{
    setCookies(c_username,c_code){
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * 1); //保存的天数
      //字符串拼接cookie
      window.document.cookie = "username" + "=" + c_username + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie = "code" + "=" + c_code + ";path=/;expires=" + exdate.toGMTString();

    },
    // 登录
    loginUser(){
      let datar = {};
      datar.username = this.username;
      datar.password = this.password;
      axios({
          headers:{'Content-Type':'application/x-www-form-urlencoded'},
          method:'post',
          url:'api/login',
          data:qs.stringify(datar),
          code:0
      })
      .then(res=>{
          if(res.data.code == 2){
            Toast({
              message: res.data.data,
              position: 'bottom',
              duration: 5000
            })
          }
          else if(this.code == 1){
            Toast({
              message: '已登录',
              position: 'bottom',
              duration: 5000
            })
          }
          else{
            this.setCookies(res.data.username,res.data.code)
            // this.$store.commit("SET_USER",res.data)
            Toast({
              message: '登陆成功',
              position: 'bottom',
              duration: 5000
            })
            this.password = "";
            this.username = "";
            this.$router.push({path:"/"})
          }
      })
    },
    getCookie(code) {
        if(code == 0){
          let arrtwo = document.cookie.match(new RegExp("(^| )" + code + "=([^;]*)(;|$)"));
          this.code = arrtwo[2]
        }
    },
    // foucsImg(){
    //   this.img = require("@/assets/img/1.png")
    // },
    // blurImg(){
    //   this.img = require("@/assets/img/2.png")
    // }
  },
  mounted(){
    this.getCookie("code");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
img,.input{
  width: 100%;
}
.img img{
  height: 5em;
}
.bottom{
  padding-top: 3em;
  width: 100%;
  display: flex;
  justify-content: space-around;
  .bottom-item{
    width: 6em;
  }
}
.is-plain{
  border: none;
}
.mint-button--primary{
  background-color: #fed74f;

}
</style>
