<template>
   <div class='collection'>
       <div class="top">收藏的菜谱</div>
       <!-- 已经登录 -->
       <div class="hasLoggedOn">
           <div class="collectList">
               <div class="collectItem flex-box" v-for="i in 6" :key="i">
                   <div class="itemLeft">
                       <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1576671417&di=c43db9b86207700901846f5601a86838&src=http://b-ssl.duitang.com/uploads/item/201603/15/20160315222418_HLBYJ.jpeg" class="itemLeftImg" alt="">
                   </div>
                   <div class="itemRight">
                       <div class="itemRightTitle">鸡蛋西红柿打卤面</div>
                       <div class="itemRightMid">安迪的小厨房</div>
                       <div class="itemRightBottom">删除</div>
                   </div>
               </div>
           </div>
       </div>
       <!-- 还未登录 -->
       <!-- <div class="notLogIn">
           <div class="text">你还未登录，请先登录</div>
       </div> -->
        <nav-bottom />
   </div>
</template>
<script>
import navBottom from "../components/nav"
export default {
    name: 'home',
    components:{
        navBottom
    },
    data () {
        return {
            
        }
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