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
           <input type="text" name="" id="">
       </div>
   </div>
</template>
<script>
export default {
    name: 'menuBox',
    data() {
        return {
            fileList: [
            ]
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
                console.log(reader.result);
            }
            if (file) {
                reader.readAsDataURL(file);
            }
            return true;
        },
        lll(){
            console.log('kkk')
        }
    }
}
</script>
<style lang='less' scoped>
</style>