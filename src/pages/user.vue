<template>
  <div class="user">
      <user-header/>
      <div class="laber">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import axios from "axios"
import { Button } from 'mint-ui';
import userHeader from "../components/Header"
export default {
  name: 'homeHeader',
  data () {
    return {
      dis:false
    }
  },
  components:{
      userHeader,
      "mt-button": Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>