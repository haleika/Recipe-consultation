<template>
   <div class='menuCard  flex-box fw-wr'>
       <router-link tag="div" to="/detail"  class="card" v-for="i in 3" :key="i">
           <div class="card-img">
               <img src="https://img.alicdn.com/imgextra/i1/4057485658/O1CN01wXWjcg1rfPSHPXE1G_!!4057485658.jpg" alt="">
           </div>
           <div class="text">
               <div class="name simple-ellipsis1">广州肠粉{{i}}</div>
               <div class="author simple-ellipsis1">归家小厨</div>
           </div>
       </router-link>
   </div>
</template>
<script>
export default {
    name: 'menuCard',
    data () {
    return {
    }
    }
}
</script>
<style lang="less" scoped>
.card{
    overflow: hidden;
    width: 48%;
    margin-top:20px;
    
    padding-bottom: 10px;
    border-radius: 10px;
    box-sizing: border-box;

    background-color: #fff;
    &:nth-of-type(even) {
        margin-left:2%;
    }
    .card-img{
        img{
            width: 100%;
            height: 100%;;
        }
    }
    .text{
        // padding-left: 10px;
        .name{
            font-weight: bold;
            padding: 10px 0;
        }
        .author{
            font-size: 13px;
            color:#999;
        }
    }
}
</style>