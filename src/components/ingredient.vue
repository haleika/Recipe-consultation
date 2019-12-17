<template>
   <div class='ingredient'>
       <div class="ingredientTop flex-b-sbc">
           <div class="left">
               需要食材
           </div>
           <div class="right">
               加入菜篮子
           </div>
       </div>
       <div class="ingredientBottom">
           <ul>
               <li class="flex-b-sbc">
                   <div class="name ">大米</div>
                   <div class="kg">120g</div>
               </li>
               <li class="flex-b-sbc">
                   <div class="name ">大米</div>
                   <div class="kg">120g</div>
               </li>
           </ul>
       </div>
   </div>
</template>
<script>
export default {
    name: 'ingredient',
    data () {
    return {
    }
    }
}
</script>
<style lang="less" scoped>
.ingredient{
    margin: 30px 20px;
    .ingredientTop{
        .left{
            font-weight: bold;
            font-size: 18px;
        }
        .right{
            background-color: #fefbef;
            color:#e1b776;
        }
    }
    .ingredientBottom{
        margin: 0 10px;
        ul{
            li{
                margin-top: 60px;
            }
        }
    }
}
</style>