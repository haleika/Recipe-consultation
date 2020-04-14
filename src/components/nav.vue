<template>
   <div class='bottom flex-b-sac'>
       <div
            v-for="item in list"
            :key="item.icon"
            :class="pageThis == item.page?'tabbarColor':''"
            @click="toPage(item.page)"
        >
           <div
                class="iconfont"
                v-html="item.icon"
            >{{item.icon}}</div>
           <div>{{item.text}}</div>
       </div>
   </div>
</template>
<script>
export default {
    name: 'Nav',
    data () {
        return {
            list:[{
                icon:`&#xe63b;`,
                text:"首页",
                page:'/home'
            },
            {
                icon:'&#xe64b;',
                text:"食话",
                page:'/topic'
            },
            {
                icon:'&#xe60b;',
                text:"收藏",
                page:'/collection'
            },{
                icon:'&#xe614;',
                text:"我的",
                page:'/myInfo'
            }],
            pageThis:this.$route.path,
            
        }
    },
    methods:{
        toPage(page){
            this.$router.push({
                name:page.split('/')[1]
            })
            // this.$store.commit("SET_PAGE",page.split('/')[1])
        },
        getCookie(username,code) {
            let mydata = {};
                let arrone = document.cookie.match(new RegExp("(^| )" + username + "=([^;]*)(;|$)"));
                let arrtwo = document.cookie.match(new RegExp("(^| )" + code + "=([^;]*)(;|$)"));

                if(arrone){
                    mydata.username = arrone[2]
                    mydata.code = arrtwo[2]
            
                    this.$store.commit("SET_USER",mydata)
                }
            // console.log("66cccff",this.username,this.code)
        },
    },
    mounted(){
        // console.log(this.$route.path)
      this.getCookie("username","code");
    }
}
</script>
<style lang="less" scoped>
.bottom{
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff; 
    text-align: center;
    .tabbarColor{
        color: red;
    }
    .iconfont{
        font-size: 20px;
    }
}
</style>