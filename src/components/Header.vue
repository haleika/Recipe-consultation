<template>
  <div class="userHeader">
      <mt-header title="登录/注册">
        <div slot="left">
            <mt-button icon="back" @click=" $router.go(-1)">返回</mt-button>
        </div>
      </mt-header>
  </div>
</template>

<script>
import axios from "axios"
import { Header } from 'mint-ui';
export default {
  name: 'userHeader',
  data () {
    return {
    }
  },
  created(){
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.mint-header{
  background-color: #fed74f;
}
</style>
