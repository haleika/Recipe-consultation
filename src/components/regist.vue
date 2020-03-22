<template>
  <div class="regist">
      <mt-field label="账号" placeholder="请输入11位账号" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入至少6位数密码" type="password" v-model="password"></mt-field>
      
      <mt-field label="擅长菜系" placeholder="擅长菜系" v-model="skill"></mt-field>
      <mt-button class="regist_btn" :disabled="disf" type="primary" size="large" @click="regist">注册</mt-button>
  </div>
</template>

<script>
import axios from "axios"
import qs from 'qs'
import { Field,Toast  } from 'mint-ui'
export default {
  name: 'userRegist',
  data () {
    return {
      username:"",
      password:"",
      skill:"",
    }
  },
  computed:{
    disf(){
      if(this.username==""||this.password==""||this.skill==""||this.username.length<=10||this.password<=6){
        return true;
      }else{
        return false;
      }
    }
  },
  components:{
    "mt-field":Field
  },
  methods:{
    regist(){
      let datar = {};
      datar.username = this.username;
      datar.password = this.password;
      datar.skill = this.skill;
      axios({
          headers:{'Content-Type':'application/x-www-form-urlencoded'},
          method:'post',
          url:'api/regist',
          data:qs.stringify(datar)
      })
      .then(res=>{
          console.log('res=>',res); 
          Toast({
            message: res.data.data,
            position: 'bottom',
            duration: 5000
          })
          if(res.data.code == 3){
           this.$router.push({path:"/user/login"})
          }       
      })
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .regist_btn{
    margin-top:3em;
  }
  .mint-button--primary{
  background-color: #fed74f;
}
</style>
