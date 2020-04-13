<template>
   <div class='collection'>
       <header-title :title="title"/>
       <!-- 已经登录 -->
       <div class="hasLoggedOn">
           <div class="collectList">
               <router-link :to="{name: 'detail', query: { id : i.id }}" tag="div" class="collectItem flex-box" v-for="(i,index) in list" :key="index">
                   <div class="itemLeft">
                       <img :src="i.coverimg" class="itemLeftImg" alt="">
                   </div>
                   <div class="itemRight">
                       <div class="itemRightTitle">{{i.title}}</div>
                       <div class="itemRightMid">{{i.name}}</div>
                   </div>
               </router-link>
           </div>
       </div>
   </div>
</template>
<script>
import headerTitle from "../components/headerTitle"
import axios from "axios"
export default {
    name: 'classData',
    components:{
        headerTitle
    },
    data () {
        return {
            list:'',
            title:this.$route.query.tag
        }
    },
    methods:{
        // 获取食谱
        getlist(){
            axios.get("api/class/"+this.title).then(this.getlistSucc)
        },
        getlistSucc(res){
            this.list = res.data
            console.log(res)
            console.log(this.list)

        },
    },
    mounted(){
        this.getlist()
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