<template>
   <div class='createShicai'>
       <input type="text" name="" id="" v-model="shicai">
       <input type="text" name="" id="" v-model="liang">
   </div>
</template>
<script>
import axios from "axios"
import qs from 'qs'
export default {
    name: 'createShicai',
    data () {
        return {
            shicai:'',
            liang:''
        }
    },
    methods:{
        createShicai(){
            let shicai = {}
            shicai.Ingredients = this.shicai
            shicai.Dosage = this.liang

            axios({
                headers:{'Content-Type':'application/x-www-form-urlencoded'},
                method:'post',
                url:'api/createShicai',
                data:qs.stringify(shicai)
            }).then(res=>console.log("创建食谱",res))
        }
    }
}
</script>
<style lang='less' scoped>
</style>