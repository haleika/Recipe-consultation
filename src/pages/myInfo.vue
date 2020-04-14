<template>
   <div class='myInfo'>
       <div class="myInfoData">
            <div class="hasLoggedOn" v-if="this.$store.state.code == 1">
                <router-link to="/avatar" tag="div" class="portrait">
                    <div class="portrait-img">
                        <img :src="userDetail.avatar" alt="">
                    </div>
                    <div class="portrait-name">{{userDetail.name}}</div>
                </router-link>
            </div>
            <router-link to="/user" tag="div" class="notLogIn" v-else>
                <div class="notLigInBox">
                    请登录
                </div>
            </router-link>
            <div class="wave">
                <img src="../assets/img/wave.png" alt="">
            </div>
       </div>
       <div class="infolist">
           <router-link to="/change" tag="div" class="infolist-box infolistChange">
               修改资料
           </router-link>
           <div class="infolist-box infolistAbout">
               关于我们
           </div>
       </div>
	    <input type="file" id="file" ref="inp"  @change="getFile">
        <nav-bottom />
   </div>
</template>
<script>
import navBottom from "../components/nav"
import axios from "axios"
import qs from 'qs'
export default {
    name: 'myInfo',
    components:{
        navBottom
    },
    data () {
        return {
            username:'',
            code:0,
            userDetail:{}
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
        //    console.log("usernameusername",res.data[0])
            this.userDetail = res.data[0]
        },
        // 获取base6编码的
        getFile (e) {
            console.log(this.$refs.inp)
            let file = this.$refs.inp.files[0];
            var reader = new FileReader();
            reader.onloadend = function () {
                console.log(reader.result);
            }
            if (file) {
                reader.readAsDataURL(file);
            }
        }
    },
    mounted(){
    //   this.getCookie("username","code");
      this.getUser();
    //   console.log("aaaaaa",this.$store.state)
    }
}
</script>
<style lang='less' scoped>
.myInfo{
    .myInfoData{
        height: 250px;
        background-image: linear-gradient(#fed74f,#feae4c);

        position: relative;
        .portrait{
                position: absolute;
                left: 50%;
                top:50%;
                margin:-50px -50px;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                border:1px solid #fff;
                .portrait-img{
                    margin: 10px;
                    overflow: hidden;

                    img{
                        border-radius: 50%;
                        width:100%;
                        height:100%;
                    }
                }
                .portrait-name{
                    z-index: 9;
                    padding-top: 10px;
                    text-align: center;
                }
            }
        .notLogIn{
            position: relative;
            top:50%;
            margin-top: -50px;
            .notLigInBox{
                width: 200px;
                height: 50px;
                line-height: 50px;

                margin: 0 auto;
                text-align: center;

                border-radius: 5px;

                background-color: #fff;

                box-shadow: 1px 1px 10px 1px #ccc;
            }
        }
        .wave{
            width: 100%;
            position: absolute;
            bottom: -1px;
            img{
                width:100%;
            }
        }
    }
    .infolist-box{
        padding-left: 15px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #999;
    }
}
</style>