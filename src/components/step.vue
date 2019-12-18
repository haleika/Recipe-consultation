<template>
   <div class='step'>
       <div class="text">
           <span style="">步骤1</span>
           <span style="font-size:1px;color:#ccc">/36</span>
       </div>
       <div class="stepImg">
           <img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9780b27564061d95694b3f6a1a9d61b4/0b46f21fbe096b63c8a5951d06338744ebf8ac3b.jpg" alt="">
       </div>
       <div class="intro">肠粉可以这样更好吃</div>
   </div>
</template>
<script>
export default {
    name: 'step',
    data () {
        return {
        }
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