<template>
   <div class='headerTitle flex-box'>
        <div class="iconfont flex-b-cc">
            &#xe62f;
        </div>
        <div class="titleText">
            {{title}}
        </div>
   </div>
</template>
<script>
export default {
    name: 'headerTitle',
    props:{
        title:String
    },
    data () {
        return {
        }
    }
}
</script>
<style lang='less' scoped>
.headerTitle{
    position: relative;

    height: 40px;
    .iconfont{
        margin-left: 20px;

        font-size: 18px;
    }
    .titleText{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        font-size: 18px
        // line-height: 40px;
    }
}
</style>