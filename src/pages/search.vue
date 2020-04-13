<template>
   <div class='search'>
       <div>
           <header-title :title="title"/>
       </div>
       <div class="search-top">
           <van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch"/>
       </div>
       <div class="search-result" v-for="(i,index) in list" :key="index">
           <router-link :to="{name: 'detail', query: { id : i.id }}" tag="div" class="result-item flex-box">
               <div class="result-item-left">
                   <img :src="i.coverimg" alt="">
               </div>
               <div class="result-item-right">
                   <div class="right-title">{{i.title}}</div>
                   <div class="right-con simple-ellipsis2">{{i.intro}}</div>
               </div>
           </router-link>
       </div>
   </div>
</template>
<script>
import { Search } from 'vant';
import axios from "axios"
import qs from 'qs'
import headerTitle from '../components/headerTitle'

export default {
    name: 'search',
    components:{
        headerTitle
    },
    data () {
        return {
            value: '',
            title:'搜索',
            list:''
        }
    },
    methods:{
        onSearch(val) {
            console.log(val)
            axios.get("api/search/"+this.value).then(this.getLsitSucc)
        },
        getLsitSucc(res){
            console.log(res.data)
            this.list = res.data
        },
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
                .right-title{
                    margin-bottom: 20px;
                }
                .right-con{
                    font-size: 13px;
                    color: #ccc;
                }
            }
        }
    }
}
</style>