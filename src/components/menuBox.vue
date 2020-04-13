<template>
   <div class='menuBox'>
       <div>步骤{{time}}:</div>
       <div>
            <van-uploader
                v-model="fileList"
                :preview-size="100"
                :before-read="beforeRead"
                :max-count="1"
            />
       </div>
       <div>
           <input type="text" name="" id="" v-model="steptInfo">
       </div>
   </div>
</template>
<script>
import axios from "axios"
import qs from 'qs'
export default {
    name: 'menuBox',
    data() {
        return {
            fileList: [
            ],
            steptInfo:''
        }
    },
    props:{
        time:Number
    },
    methods:{
        beforeRead(file) {
            console.log(file)
            var reader = new FileReader();
            reader.onloadend = function () {
                // console.log(reader.result);
            }
            if (file) {
                reader.readAsDataURL(file);
            }
            return true;
        },
        createStep(){
            let step = {}
            step.text = this.steptInfo
            step.img = this.fileList[0].content
    console.log(stept)
            // axios({
            //     headers:{'Content-Type':'application/x-www-form-urlencoded'},
            //     method:'post',
            //     url:'api/createStep',
            //     data:qs.stringify(step)
            // }).then(res=>console.log("创建食谱",res))
        }
    }
}
</script>
<style lang='less' scoped>
</style>