<template>
   <div class='search'>
       <div class="header-title">
           <router-link to="/">返回</router-link>
           搜索
       </div>
       <div class="search-top">
           <input type="text" class="search-text">
           <span>取消</span>
       </div>
       <div class="search-result" v-for="i in 6" :key="i">
           <div class="result-item flex-box">
               <div class="result-item-left">
                   <img src="https://img.alicdn.com/imgextra/i1/4057485658/O1CN01wXWjcg1rfPSHPXE1G_!!4057485658.jpg" alt="">
               </div>
               <div class="result-item-right">
                   <div class="right-title">肠粉</div>
                   <div class="right-con simple-ellipsis2">这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个</div>
               </div>
           </div>
       </div>
   </div>
</template>
<script>
export default {
    name: 'search',
    data () {
    return {
    }
    }
}
</script>
<style lang='less' scoped>
.search{
    .header-title{
        height: 40px;
        background-color: #feae4c;
    }
    .search-top{
        background-color: #fed74f;
        .search-text{
            width: 80%;
            height: 30px;
            border: 2px solid orange;
            outline:none;
            // background-color: #ccc;
        }
    }
    .search-result{
        .result-item{
            margin: 10px 10px;
            .result-item-left{
                width: 100px;
                margin-right:10px;
                border-radius: 10px;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .result-item-right{
                width: 220px;
            }
        }
    }
}
</style>