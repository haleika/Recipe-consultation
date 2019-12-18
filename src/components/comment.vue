<template>
   <div class='comment'>
       <div class="commentBox ">
           <div class="left flex-box">
                <div class="commentImg">
                    <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1576671417&di=c43db9b86207700901846f5601a86838&src=http://b-ssl.duitang.com/uploads/item/201603/15/20160315222418_HLBYJ.jpeg" alt="">
                </div>
                
                <div class="name simple-ellipsis1">风景线</div>
           </div>
           <div class="right">
               <div class="con simple-ellipsis1">
                   分享了
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
    }
}
</script>
<style lang='less' scoped>
.comment{
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