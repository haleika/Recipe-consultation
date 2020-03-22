<template>
   <div class='myInfo'>
       <div class="myInfoData">
            <div class="hasLoggedOn" v-if="this.$store.state.code == 1">
                <div class="user flex-b-sbc">
                        <div class="userInfo flex-b-cc">
                            <router-link to="/avatar" tag="div" class="portrait">
                                <img :src="userDetail.avatar" alt="">
                            </router-link>
                            <div class="info">
                                <div class="name">{{userDetail.name}}</div>
                                <div class="speciality">
                                    专长：{{userDetail.skill}}
                                </div>
                            </div>
                        </div>
                    
                        <div class="iconfont" style="color:#fff;">
                            &#xe636;
                        </div>
                </div>
                <div class="message flex-b-sac">
                    <div class="attention">
                        <p>0</p>
                        <p>关注</p>
                    </div>
                    <div class="fans">
                        <p>0</p>
                        <p>粉丝</p>
                    </div>
                    <div class="sign">
                        <p>0</p>
                        <p>签到</p>
                    </div>
                </div>
            </div>
            <router-link to="/user" tag="div" class="notLogIn" v-else>
                <div class="notLigInBox">
                    请登录
                </div>
            </router-link>
       </div>
       <div class="shop flex-b-sac">
           <div class="shopBox flex-b-cc">
               <div class="icon">
                   <img src="../assets/img/icon_tiwen.png" alt="">
               </div>
               <div class="text">
                   <p>VIP会员</p>
                   <p>1w+课程免费看</p>
               </div>
           </div>
           <div class="shopBox flex-b-cc">
               <div class="icon">
                   <img src="../assets/img/icon_tiwen.png" alt="">
               </div>
               <div class="text">
                   <p>厨币商城</p>
                   <p>赚厨币，兑好礼</p>
               </div>
           </div>
       </div>
       <div class="navi">
           <div class="navIcon">
               <ul class="flex-b-sac">
                    <li>
                        <div class="img">
                            <img src="../assets/img/icon_tiwen.png" alt="">
                        </div>
                        <div class="text">
                            作品
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <img src="../assets/img/icon_tiwen.png" alt="">
                        </div>
                        <div class="text">
                            作品
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <img src="../assets/img/icon_tiwen.png" alt="">
                        </div>
                        <div class="text">
                            作品
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <img src="../assets/img/icon_tiwen.png" alt="">
                        </div>
                        <div class="text">
                            作品
                        </div>
                    </li>
               </ul>
           </div>
       </div>
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
        // getCookie(username,code) {
        //     if(this.code == 0){
        //         let arrone = document.cookie.match(new RegExp("(^| )" + username + "=([^;]*)(;|$)"));
        //         let arrtwo = document.cookie.match(new RegExp("(^| )" + code + "=([^;]*)(;|$)"));

        //         this.username = arrone[2]
        //         this.code = arrtwo[2]
        //     }
        //     // console.log("66cccff",this.username,this.code)
        // },
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
        }
    },
    mounted(){
    //   this.getCookie("username","code");
      this.getUser();
      console.log("aaaaaa",this.$store.state)
    }
}
</script>
<style lang='less' scoped>
.myInfo{
    .myInfoData{
        height: 250px;
        background-image: linear-gradient(#fed74f,#feae4c);
        // .dataTop{
        //     height: 30px;
        //     line-height: 30px;
        //     div{
        //         float:right;

        //         font-size: 23px;
        //     }
        // }
        .user{
            padding:40px 20px;
            .userInfo{
                .portrait{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;

                    overflow: hidden;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .info{
                    margin-left: 10px;
                    .name{
                        font-size: 18px;
                    }
                    .speciality{
                        padding:10px 0;

                        font-size: 13px;

                        // color: #999;
                    }
                }
            }
        }
        .message{
            text-align: center;
            padding: 25px 0 55px 0;
            .attention,.fans,.sign{
                p{
                    margin-bottom: 10px;
                }
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
    }
    .shop{
        margin-top:-30px;
        .shopBox{
            padding:20px 15px;
            border-radius: 10px;
            
            background-color: #fff;
            box-shadow: 0 2px 10px 1px #ccc;
            .icon{
                width: 25px;
                height: 25px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .text{
                padding-left: 10px;
                p{
                    padding-top:5px;
                }
                p:nth-child(1){
                    font-size: 16px;
                    font-weight: bold;
                }
                p:nth-child(2){
                    font-size: 13px;

                    color: #999;
                }
            }
        }
    }
    .navi{
        margin: 40px 0;
        .navIcon{
            ul{
                li{
                    text-align: center;
                    .img{
                        width: 50px;
                        height: 50px;
                        img{
                            width: 100%;
                            height: 100%
                        }
                    }
                }
            }
        }
    }
}
</style>