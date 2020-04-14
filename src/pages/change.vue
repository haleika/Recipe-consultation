<template>
   <div class='change'>
       <div>
           <header-title :title="title"/>
       </div>
       <div class="changeList">
	        <input type="file" id="file" class="my-input">
           <div class="item flex-b-sbc">
               <div class="tag">头像</div>
               <div class="info">
                   <img :src="userDetail.avatar" alt="">
               </div>
           </div>
           <div class="item flex-b-sbc">
               <div class="tag">昵称</div>
               <div class="info">
                   <input type="text" v-model="userDetail.name">
               </div>
           </div>
           <div class="item flex-b-sbc">
               <div class="tag">技能</div>
               <div class="info">
                   <input type="text" v-model="userDetail.skill">
               </div>
           </div>
       </div>
        <div class="wrapper" v-show="show">
            <div class="block">
                
                <div id="clipArea"></div>
                <button id="clipBtn">截取</button>
                <button id="clipSure" @click="clipSure">确定</button>
                <div id="view"></div>
            </div>
        </div>
        <van-button style="margin-top:20px;" type="primary" color="#feae4c" size="large" @click="changeInfo">確定</van-button>
   </div>
</template>
<script>
import { Overlay } from 'vant';
import { Button } from 'vant';
import { Notify } from 'vant';
import navBottom from "../components/nav"
import headerTitle from '../components/headerTitle'
import PhotoClip from 'photoclip'
import axios from "axios"
import qs from 'qs'
export default {
    name: 'change',
    components:{
        navBottom,
        headerTitle
    },
    data () {
        return {
            username:'',
            code:0,
            userDetail:{},
            title:'修改信息',
            show: false,
            temporary:''
        }
    },
    methods:{
        getUser(){
            if(this.$store.state.code == 1){
                let user = {};
                user.username = this.$store.state.username;
                axios({
                    headers:{'Content-Type':'application/x-www-form-urlencoded'},
                    method:'post',
                    url:'api/user',
                    data:qs.stringify(user)
                }).then(this.getUserSucc)
            }
        },
        getUserSucc(res){
            this.userDetail = res.data[0]
        },
        getCookie(username,code) {
            let mydata = {};
                let arrone = document.cookie.match(new RegExp("(^| )" + username + "=([^;]*)(;|$)"));
                let arrtwo = document.cookie.match(new RegExp("(^| )" + code + "=([^;]*)(;|$)"));

                mydata.username = arrone[2]
                mydata.code = arrtwo[2]
            
            this.$store.commit("SET_USER",mydata)
            // console.log("66cccff",this.username,this.code)
        },
        clipSure(){
            this.userDetail.avatar = this.temporary
            this.show = false
        },
        changeInfo(){
            let changeInfo = {};
            changeInfo.username = this.userDetail.username;
            changeInfo.avatar = this.userDetail.avatar;
            changeInfo.name = this.userDetail.name;
            changeInfo.skill = this.userDetail.skill
            axios.post('api/change', qs.stringify(changeInfo))
                        .then(function (response) {
            })
            Notify({ type: 'success', message: '修改成功' });
        }
    },
    mounted(){
      this.getCookie("username","code");
      this.getUser();
      let that = this
        var pc = new PhotoClip('#clipArea', {
            size: [260, 260],
            outputSize: 640,
            //adaptive: ['60%', '80%'],
            file: '#file',
            view: '#view',
            ok: '#clipBtn',
            //img: 'img/mm.jpg',
            loadStart: function() {
                console.log('开始读取照片');
            },
            loadComplete: function() {
                console.log('照片读取完成');
                console.log(that)
                that.show = true
            },
            done: function(dataURL) {
                // console.log(dataURL);
                that.temporary = dataURL
            },
            fail: function(msg) {
                alert(msg);
            }
        });
        // 加载的图片必须要与本程序同源，否则无法截图
        // pc.load('img/mm.jpg');
    }
}
</script>
<style lang='less' scoped>
.change{
    .changeList{
        .item{
            padding: 10px 10px;
            .tag{

            }
            .info{
                img{
                    height: 60px;
                    width: 60px;
                    border-radius: 50%;
                }
            }
        }
        .my-input{
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            overflow: hidden;
            cursor: pointer;
            opacity: 0;
        }
    }
}
.wrapper{
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    .block{
        overflow: hidden;
        width: 100%;
    }
}
#clipArea {
	height: 300px;
}
#file,
#clipBtn {
	margin: 20px;
}
#view {
	margin: 0 auto;
	width: 200px;
	height: 200px;
	background-color: #666;
}
</style>