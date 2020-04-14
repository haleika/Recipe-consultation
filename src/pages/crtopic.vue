<template>
   <div class='crtopic'>
       <div>
            <header-title :title="title"/>
       </div>
       <!-- 顶部 -->
       <div class="jj">
           <div class="jj-title">
                名称:
            </div>
            <div class="jj-title-input">
                <input type="text" name="" id="" v-model="mytitle" placeholder="请输入标题">
            </div>
            <div class="jj-text">
                简介：
            </div>
            <div class="jj-text-input">
                <textarea name="" id="" cols="30" rows="10" v-model="intro"  placeholder="请输入简介"></textarea>
            </div>
       </div>
       <div class="fm">
           <div class="fm-title">图片</div>
           <div class="fm-img">
               <van-uploader
                v-model="fileList"
                :preview-size="100"
                :before-read="beforeRead"
                :max-count="1"
                class="img-box"
                />
           </div>
       </div>

       <van-button type="primary" size="large" color="rgb(204, 118, 47)"  @click="pushData">发布菜谱</van-button>
   </div>
</template>
<script>
import headerTitle from '../components/headerTitle'
import { Notify } from 'vant';
import axios from "axios"
import qs from 'qs'
export default {
    name: 'crtopic',
    components:{
        headerTitle
    },
    data () {
        return {
            title:'話題',
            mytitle:'',
            fileList:[],
            userDetail:{},
            intro:'',//内容
        }
    },
    methods:{
        getUser(username){
           let arrone = document.cookie.match(new RegExp("(^| )" + username + "=([^;]*)(;|$)"));

           let user = {};
            user.username = arrone[2];
            axios({
                headers:{'Content-Type':'application/x-www-form-urlencoded'},
                method:'post',
                url:'api/user',
                data:qs.stringify(user)
            }).then(this.getUserSucc)
        },
        beforeRead(file) {
            var reader = new FileReader();
            reader.onloadend = function () {
                // console.log(reader.result);
            }
            if (file) {
                reader.readAsDataURL(file);
            }
            return true;
        },
        getUserSucc(res){
            this.userDetail = res.data[0]
        },
        pushData(){
            if(!this.mytitle){
                Notify({ type: 'danger', message: '请输入标题' });
            }
            else if(!this.intro){
                Notify({ type: 'danger', message: '请输入内容' });
            }
            else{
                let crtopic = {};
                crtopic.topicinto = {}
                crtopic.topicinto.avatar = this.userDetail.avatar
                crtopic.topicinto.name = this.userDetail.name
                crtopic.topicinto.title = this.mytitle
                crtopic.topicinto.intro = this.intro
                crtopic.topicinto.coverimg = this.fileList[0].content
                // console.log(creation)
                axios({
                    headers:{'Content-Type':'application/x-www-form-urlencoded'},
                    method:'post',
                    url:'api/crtopic',
                    data:qs.stringify(crtopic)
                }).then(res=>{
                    this.$router.go(-1);
                    Notify({ type: 'success', message: '发布成功' });
                })
            }

        },
    },
    mounted(){
        this.getUser('username')
    }
}
</script>
<style lang='less' scoped>
.creation{
    background-color: #E6E6E6;
    padding-bottom: 50px;
}

input{
    border: none;
    border-radius: 5px;
    width: 95%;
    margin: 0 10px;
    background-color: #ccc;
    height: 30px;
}
.fm{
    .fm-title{
        margin: 10px;
        font-weight: bold;
    }
    .fm-img{
        padding: 10px 0;
        background-color: #fff;
    }
}
.jj{
    .jj-title,.jj-text,.jj-select{
        margin: 20px;
        font-weight: bold;
    }
    .jj-title-input{
        padding: 10px 0;
        background-color: #fff;
    }
    .jj-text-input{
        padding: 10px 0;
        background-color: #fff;
        textarea{
            border: none;
            background-color: #ccc;
            border-radius: 5px;
            margin: 0 10px;
            width: 95%;
        }
    }
}

.pushdata{
    text-align: center;
    background-color: #fff;
    line-height: 50px;
    height: 50px;
}
</style>