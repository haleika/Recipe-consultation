<template>
   <div class='collection'>
       <div class="top">收藏的菜谱</div>
       <!-- 已经登录 -->
       <div class="hasLoggedOn" v-if="this.$store.state.username">
           <div class="collectList">
               <router-link :to="{name: 'detail', query: { id : i.id }}" tag="div" class="collectItem flex-box" v-for="(i,index) in collect" :key="index">
                   <div class="itemLeft">
                       <img :src="i.image" class="itemLeftImg" alt="">
                   </div>
                   <div class="itemRight">
                       <div class="itemRightTitle">{{i.name}}</div>
                       <div class="itemRightMid">{{i.author}}</div>
                       <div class="itemRightBottom">删除</div>
                   </div>
               </router-link>
           </div>
       </div>
       <!-- 还未登录 -->
       <div class="notLogIn" v-else>
           <div class="text">你还未登录，请先登录</div>
       </div>
        <nav-bottom />
   </div>
</template>
<script>
import navBottom from "../components/nav"
import axios from "axios"
export default {
    name: 'home',
    components:{
        navBottom
    },
    data () {
        return {
            collect:''
        }
    },
    methods:{
        // 获取食谱
        getCollect(){
            axios.get("api/collect/"+this.$store.state.username).then(this.getCollectSucc)
        },
        getCollectSucc(res){
            this.collect = res.data
        },
    },
    mounted(){
        this.getCollect()
    }
}
</script>
<style lang='less' scoped>
.collection{
    margin-bottom: 100px;
    .top{
        position: fixed;
        top: 0;

        width: 100%;
        text-align: center;
        line-height: 50px;
        height: 50px;
        z-index: 2;

        background-color: #fff;
        // box-shadow: 0 1px 40px 1px #ccc;
    }
    .hasLoggedOn{
        margin-top: 50px;
        .collectList{
            .collectItem{
                margin: 20px 10px;
                height: 95px;
                .itemLeft{
                width: 40%;
                overflow: hidden;
                border-radius: 10px;
                .itemLeftImg{
                    width: 100%;
                    height: 100%;
                }
            }
            .itemRight{
                position: relative;

                padding-left: 20px;
                .itemRightTitle{
                    margin: 10px 10px;
                    font-size: 18px;
                    color: #000;
                }
                .itemRightMid{
                    margin: 10px 10px;
                    font-size: 13px;
                    color: #ccc;
                }
                .itemRightBottom{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    
                    font-size: 15px;
                    
                    color: #ccc;
                }
            }
        }
           
        }
    }
    .notLogIn{
        margin-top: 50px;
        .text{
            margin-top: 200px;
            text-align: center;
        }
    }
}
</style>