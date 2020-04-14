<template>
   <div class='pinglun'>
       <header-title :title="title"/>
       <div class="con">
           <input type="text" v-model="pinglun" class="con-input">
           <van-button  @click="commentOn" type="primary" size="large" round class="button-sub">发表</van-button>
       </div>
   </div>
</template>
<script>
import headerTitle from "../components/headerTitle"
import axios from "axios"
import qs from 'qs'
export default {
    name: 'pinglun',
    data () {
        return {
            pinglun:"",
            userDetail:{},
            title:'评论'
        }
    },
    components:{
        headerTitle
    },
    methods:{
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
            console.log("usernameusername",res.data[0])
            this.userDetail = res.data[0]
        },
       commentOn(){
           let coldata = {}
            coldata.username = this.userDetail.username
            coldata.name = this.userDetail.name
            coldata.avatar = this.userDetail.avatar
            coldata.pinglun = this.pinglun
            // console.log(coldata.username)
            coldata.id = this.$route.query.id;
            axios({
                headers:{'Content-Type':'application/x-www-form-urlencoded'},
                method:'post',
                url:'api/insetPinglun',
                data:qs.stringify(coldata)
            }).then(res=>{
                // this.getColSucc(res);
                this.$router.go(-1);
            })
       }  

    },
    mounted(){
        console.log(this.$route.query.id)
        this.getUser("username")
    }
}
</script>
<style lang='less' scoped>
.pinglun{
    .top{
        position: fixed;
        top: 0;

        width: 100%;
        text-align: center;
        font-weight: bold;
        line-height: 50px;
        height: 50px;
        z-index: 2;

        background-color: #fff;
        // box-shadow: 0 1px 40px 1px #ccc;
    }
    .con{
        text-align: center;
        margin-top: 50px;
        .con-input{
            margin-top: 10px;
            width: 90%;
            height: 30px;
        }
        .button-sub{
            margin-top: 70px;
        }
    }
}
</style>