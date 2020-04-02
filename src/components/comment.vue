<template>
   <div class='comment'>
       <div class="commentBox" v-for="(item,index) in pinglun" :key="index">
           <div class="left flex-box">
                <div class="commentImg">
                    <img :src="item.avatar" alt="">
                </div>
                
                <div class="name simple-ellipsis1">{{item.name}}</div>
           </div>
           <div class="right">
               <div class="con simple-ellipsis1">
                   {{item.content}}
               </div>
           </div>
       </div>
   </div>
</template>
<script>
export default {
    name: 'comment',
    data () {
    return {
    }
    },
    props:{
        pinglun:Array
    }
}
</script>
<style lang='less' scoped>
.comment{
    padding:20px 0 60px 0;
    .commentBox{
        padding:20px 0;
        .left{
            .commentImg{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
            }
            }
            .name{

                padding-top: 5px;
                padding-left: 12px;
                font-size: 16px;
                
                color: #ebbe76;
            }
        }
        .right{
            
            .con{
                padding-left: 50px;

                font-size: 14px;
            }
        }
    }
}
</style>