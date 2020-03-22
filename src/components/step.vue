<template>
   <div class='step'>
       <div v-for="(item,index) in shipuList" :key="index">
           <div class="text">
                <span style="">步骤 <span style="color:orange">{{index}}</span></span>
                <span style="font-size:1px;color:#ccc">{{shipuList.length}}</span>
            </div>
            <div class="stepImg">
                <img :src="item.img" alt="">
            </div>
            <div class="intro">{{item.text}}</div>
       </div>
   </div>
</template>
<script>
export default {
    name: 'step',
    data () {
        return {
            
        }
    },
    props:{
        shipuList:Array
    }
}
</script>
<style lang="less" scoped>
.step{
    // padding: 0 20px;
    .text{
        padding: 20px 0;
    }
    .stepImg{
        margin: 0 auto;
        width: 100%;
        height: 200px;
        border-radius: 10px;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .intro{
        margin: 20px 0;
    }
}
</style>