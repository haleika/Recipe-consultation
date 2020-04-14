<template>
   <div class='topicData'>
       <div>
           <header-title :title="title"/>
       </div>
       <div style="background:#fff">
           <div class="title">{{TopicData.title}}</div>
           <div class="content">{{TopicData.content}}</div>
           <div @click="showImg" class="img">
               <van-image width="100" height="100" :src="TopicData.img" />
           </div>
       </div>
       <div class="pl">
           <div class="pinglun">
                <div style="font-size:23px;">用户评论</div>
                <ul>
                    <li class="flex-box" v-for="(i,index) in pinglun" :key="index">
                        <div class="avatar">
                            <img :src="i.avatar" alt="">
                        </div>
                        <div class="comment_textContent">
                            <div class="comment_userinfo">{{i.name}}</div>
                            <div class="comment_text">{{i.content}}</div>
                        </div>
                    </li>
                </ul>
            </div>
       </div>
       <div class="input">
           <input type="text"  v-model="pl" ><span @click="commentOn" style="color:#fff">发布</span>
       </div>
   </div>
</template>
<script>
import axios from "axios"
import qs from 'qs'
import { Image } from 'vant';
import { Dialog } from 'vant';
import headerTitle from "../components/headerTitle"
import { ImagePreview } from 'vant';
import { Skeleton } from 'vant';
export default {
    name: 'topicData',
    components:{
        headerTitle
    },
    data () {
    return {
        TopicData:[],
        title:"话题",
        pinglun:[],
        userDetail:{},
        pl:''
    }
    },
    methods:{
        getTopic(){
            axios.get("api/topicData/"+this.$route.query.id).then(this.getTopicSucc)
        },
        getTopicSucc(res){
            this.TopicData = res.data[0]
            // console.log("3333333",res)
        },
        showImg(){
            ImagePreview([this.TopicData.img
            ]);
        },
        getpinglun(){
            axios.get("api/dataPinglun/"+this.$route.query.id).then(this.getpinglunSucc)
        },
        getpinglunSucc(res){
            this.pinglun = res.data
            // console.log("pinglun",res.data)
        },
        getUser(username){
           let arrone = document.cookie.match(new RegExp("(^| )" + username + "=([^;]*)(;|$)"));
        //    console.log("arrone",arrone)
           let user = {};
            user.username = arrone[2];
            axios({
                headers:{'Content-Type':'application/x-www-form-urlencoded'},
                method:'post',
                url:'api/user',
                data:qs.stringify(user)
            }).then(this.getUserSucc)
       },
        getUserSucc(res){
            // console.log("usernameusername",res.data[0])
            this.userDetail = res.data[0]
        },
       commentOn(){
           let coldata = {}
            coldata.username = this.userDetail.username
            coldata.name = this.userDetail.name
            coldata.avatar = this.userDetail.avatar
            coldata.pinglun = this.pl
            // console.log(coldata.username)
            coldata.id = this.$route.query.id;
            axios({
                headers:{'Content-Type':'application/x-www-form-urlencoded'},
                method:'post',
                url:'api/insetTopicPinglun',
                data:qs.stringify(coldata)
            }).then(res=>{
                this.$router.go(0);
            })
       }
    },
    mounted(){
        this.getTopic()
        this.getpinglun()
        this.getUser('username')
    }
}
</script>
<style lang='less' scoped>
.topicData{
    background-color: #f7f7f7;
    .title{
        font-size: 23px;
        margin: 10px 5px;
        padding-top: 20px;
    }
    .content{
        margin: 5px 5px;
    }
    .img{
        margin-left: 5px;
        padding-bottom: 20px;
    }
    .pl{
        margin-top: 20px;
        background-color: #fff;
    }
    .pinglun{
            background-color: #fff;
            margin: 20px 0;
            padding: 20px 10px;
            ul{
                margin-top: 20px;
                li{
                    margin: 10px 0;
                    height: 70px;
                    .avatar{
                        margin-right: 10px;
                        img{
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                        }
                    }
                    .comment_textContent{
                        .comment_userinfo{
                            margin-bottom: 6px;
                        }
                    }
                }
            }
        }
        .input{
            position: fixed;
            bottom: 0;
            background-color: #feae4c;
            width: 100%;
            height: 40px;
            text-align: center;
            input{
                border: none;
                background-color: #f7f7f7;
                width: 90%;
                border-radius: 20px;
                margin: 10px 0;
                text-indent: 20px;
            }
        }

}
</style>