<template>
  <div class="app">
    <header class="pc-header"  v-show="!this.$store.state.isMobile">
      <div class="top">
          <!-- 内容 -->
          <div class="container">
              <!-- 左边 -->
              <div class="left">
                  <a href="javascript:void(0)">
                      <span class="down">美食美客</span>
                  </a>
              </div>

              <!-- 右边 -->
              <div class="right">
                  <a href="">登录</a>
              </div>
          </div>

      </div>
    </header>
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
        getScreen(){
            let clientWidth =
            document.documentElement.clientWidth || document.body.clientHeight;
            if(clientWidth < 768){
              this.$store.commit("SET_MOBLIE",true)
            }else{
              this.$store.commit("SET_MOBLIE",false)
            }
        },
        setMobile(){
          addEventListener('resize',()=>{
            this.getScreen();
          })
        }
  },
  mounted(){
    this.setMobile();
  },
  created(){
    this.getScreen();
  }
}
</script>

<style lang='less' scoped>
.top {
    width: 1180px;
    margin: 0 auto;
    height: 80px;
    
    .container {
        display: flex;
        justify-content: space-between;
        // width: 1128px;
        width: 100%;
        max-width: 1128px;
        margin-left: auto;
        margin-right: auto;

        .left {
            a {
                line-height: 80px;
            }
        }
    }

    .right {
        a {
            line-height: 80px;

            span {
                &.global,&.arrow{
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    margin-right: 13px;
                    margin-bottom: -2px;
                }
            }
        }
    }

}
</style>
