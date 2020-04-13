<template>
   <div class='topHeader' @click=" $router.go(-1)">
       <div class="flex-b-sbc" :class="[isScroll?s1:s2]">
           <div class="left iconfont">&#xe62f;</div>
           <div class="icon flex-b-cc" >
               <div class="iconItem wx iconfont" :class="[isScroll?s1:s2]">&#xe659;</div>
               <div class="iconItem pyq iconfont" :class="[isScroll?s1:s2]">&#xe69a;</div>
               <div class="iconItem">···</div>
           </div>
       </div>
   </div>
</template>
<script>
export default {
    name: 'topHeader',
    data () {
        return {
            isScroll:false,
            s1:'bgw',
            s2:'bgb'
        }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll(e){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // console.log(scrollTop)
            if(scrollTop>250){
                this.isScroll = true
            }else{
                this.isScroll = false
            }
        },
        // toHome(){
        //     // console.log("点击了返回")
        //     this.$router.push({
        //         name:'home'
        //     })
        // }
    }
}
</script>
<style lang="less" scoped>
.topHeader{
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    .bgw{
        background-color: #fff;
        color: #000;
    }
    .bgb{
        background-color: transparent ;
        color: #fff;
    }
    .left{
        height: 125px/2;
        line-height: 125px/2;
        font-size: 54px/2;
    }
    .icon{
        
        .iconItem{
            padding-right: 20px;
            font-size: 54px/2;
        }
    }
}

</style>