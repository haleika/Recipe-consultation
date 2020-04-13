<template>
   <van-collapse v-model="activeNames" accordion  class='ingredient'>
       <van-collapse-item title="需要食材" size="large" name="1" class="ingredientBottom">
           <ul v-for="(item,index) in Ingredient" :key="index">
               <li class="flex-b-sbc">
                   <div class="name ">{{item.Ingredients}}</div>
                   <div class="kg">{{item.Dosage}}</div>
               </li>
           </ul>
       </van-collapse-item>
   </van-collapse>
</template>
<script>
import { Collapse, CollapseItem } from 'vant';
export default {
    name: 'ingredient',
    data () {
    return {
        activeNames: ['1']
    }
    },
    props:{
        Ingredient:Array
    }
}
</script>
<style lang="less" scoped>
.ingredient{
    margin: 20px 0;
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
        ul{
            li{
                margin-top: 20px;
            }
        }
    }
}
</style>