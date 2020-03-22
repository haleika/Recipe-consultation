<template>
   <div class='menuCard  flex-box fw-wr'>
       <router-link
            tag="div"
            :to="{name: 'detail', query: { id : item.id }}"
            class="card"
            v-for="item in recipeList"
            :key="item.id"
            @click="pushData()"
        >
           <div class="card-img">
               <img :src="item.coverimg" alt="">
           </div>
           <div class="text">
               <div class="name simple-ellipsis1">{{item.title}}</div>
               <div class="author simple-ellipsis1">{{item.name}}</div>
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
    },
    props:{
        recipeList:Array
    },
    methods:{
        pushData(res){
            console.log('111')
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
            height: 110px;;
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