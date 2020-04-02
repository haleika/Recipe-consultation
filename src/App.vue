<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch:{
    '$route':function(to,from){
　    document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  methods:{
        getCookie(username,code) {
            let mydata = {};
                let arrone = document.cookie.match(new RegExp("(^| )" + username + "=([^;]*)(;|$)"));
                let arrtwo = document.cookie.match(new RegExp("(^| )" + code + "=([^;]*)(;|$)"));

                mydata.username = arrone[2]
                mydata.code = arrtwo[2]
            
            this.$store.commit("SET_USER",mydata)
            // console.log("66cccff",this.username,this.code)
        },
  },
  mounted(){
      this.getCookie("username","code");
  }
}
</script>

<style>
</style>
