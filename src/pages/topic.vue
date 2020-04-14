<template>
   <div class='topic' >
       
       <div class="top">食话</div>
       <!-- <van-notice-bar text="全新上市的菜谱功能，发表可得现金大奖" left-icon="volume-o" :scrollable="false"/> -->
        <div style="background:#f7f7f7">
            <van-pull-refresh
                v-model="isLoading"
                success-text="刷新成功"
                @refresh="onRefresh"
            >
                <div class="topicList">
                    <router-link :to="{name: 'topicData', query: { id : i.id }}" tag="div" 
                        class="topicItem"
                        v-for="(i,index) in topicList"
                        :key="index"
                    >
                        <div class="title simple-ellipsis1">{{i.title}}</div>
                        <div class="content simple-ellipsis1">{{i.content}}</div>
                        <div class="img">
                            <img :src="i.img" alt="">
                        </div>
                    </router-link>
                </div>
            </van-pull-refresh>
        </div>
        <nav-bottom />
   </div>
</template>
<script>
import navBottom from "../components/nav"
import { PullRefresh } from 'vant';
import { Toast } from 'vant';
import axios from "axios"
import { NoticeBar } from 'vant';
import qs from 'qs'
export default {
    name: 'topic',
    components:{
        navBottom
    },
    data () {
        return {
            isLoading: false,
            topicList:[]
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                Toast('刷新成功');
                this.isLoading = false;
                this.count++;
            }, 1000);
        },
        getTopicList(){
            axios.get('api/topic').then(this.getTopicListSuccs)
        },
        getTopicListSuccs(res){
            this.topicList = res.data
        }
    },
    mounted(){
        this.getTopicList()
    }
}
</script>
<style lang='less' scoped>
.top{

        width: 100%;
        text-align: center;
        line-height: 50px;
        height: 50px;
        z-index: 2;

        background-color: #fff;
        // box-shadow: 0 1px 40px 1px #ccc;
    }
.topicList{
    background-color: #fff;
    margin: 20px 5px;
    padding:5px 20px;
    border-radius: 15px;
    box-shadow:0 0 1px 1px #ccc;
    .title{
        font-size: 23px;
        padding: 10px 0;
    }
    .content{
        font-size: 13px;
        padding: 5px 0;
    }
    .img{
        img{
            width: 100px;
            height: 100px;
            border-radius: 10px;
        }
    }
}
</style>