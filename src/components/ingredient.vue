<template>
   <div class='ingredient'>
       <div class="ingredientTop flex-b-sbc">
           <div class="left">
               需要食材
           </div>
       </div>
       <div class="ingredientBottom">
           <ul v-for="(item,index) in Ingredient" :key="index">
               <li class="flex-b-sbc">
                   <div class="name ">{{item.Ingredients}}</div>
                   <div class="kg">{{item.Dosage}}</div>
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
    },
    props:{
        Ingredient:Array
    }
}
</script>
<style lang="less" scoped>
.ingredient{
    padding: 40px 0;
    background-color: #fff;
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