<template>
   <div class='menuCard'>
       <div class="card flex-1">
           <div class="card-img">
               <img src="https://img.alicdn.com/imgextra/i1/4057485658/O1CN01wXWjcg1rfPSHPXE1G_!!4057485658.jpg" alt="">
           </div>
           <div class="text">
               <div class="name simple-ellipsis1">广州肠粉</div>
               <div class="author simple-ellipsis1">归家小厨</div>
           </div>
       </div>
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

    margin-top:20px;
    height: 220px;
    border-radius: 10px;

    background-color: #fff;
    .card-img{
        width: 160px;
        img{
            width: 100%;
            height: 100%;;
        }
    }
    .text{
        padding-left: 10px;
        .name{
            font-weight: bold;
            padding: 25px 0;
        }
        .author{
            font-size: 13px;
            color:#999;
        }
    }
}
</style>