<template>
   <div class='creation'>
       <div>
            <header-title :title="title"/>
       </div>
       <div>
           <van-uploader
                v-model="fileList"
                :preview-size="100"
                :before-read="beforeRead"
                :max-count="1"
            />
           <menu-box v-for="i in item" :key='i' :time='i' ref="box"/>
       </div>
       <div @click="pushData">点击我</div>
   </div>
</template>
<script>
import headerTitle from '../components/headerTitle'
import menuBox from '../components/menuBox'
export default {
    name: 'creation',
    components:{
        headerTitle,
        menuBox
    },
    data () {
        return {
            title:'创建菜谱',
            fileList:[],
            item:3
        }
    },
    methods:{
        pushData(){
            for(let i = 0; i < this.item;i++){
                this.$refs.box[i].lll()
            }
        },
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
    }
}
</script>
<style lang='less' scoped>
</style>