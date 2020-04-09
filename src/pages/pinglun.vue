<template>
   <div class='pinglun'>
       <input type="text" v-model="pinglun">
       <div @click="commentOn">点击</div>
       {{pinglun}}
   </div>
</template>
<script>
import axios from "axios"
import qs from 'qs'
export default {
    name: 'pinglun',
    data () {
    return {
        pinglun:"",
        userDetail:{}
    }
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
</style>