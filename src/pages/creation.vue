<template>
   <div class='creation'>
       <div>
            <header-title :title="title"/>
       </div>
       <!-- 顶部 -->
       <div class="fm">
           <div class="fm-title">封面</div>
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
            <div class="jj-select">
                分类:
            </div>
            <div class="jj-select-fl">
                <van-dropdown-menu>
                 <van-dropdown-item v-model="fenlei" :options="option1" />
                 </van-dropdown-menu>
            </div>
       </div>
       <!-- 食材 -->
       <div class="sc">
            <div class="sc-title">食材</div>
            <div class='createShicai flex-b-cc' v-for="(i,index) in shicaiList" :key="index">
                <input type="text" v-model="i.Ingredients"  placeholder="请输入材料">
                <input type="text" v-model="i.Dosage"  placeholder="请输入用量">
            </div>
            <div class="addshicai" @click="addshicai">新增一行</div>
       </div>
       <!-- <div>{{shicaiList}}</div> -->
       <!-- 步骤 -->
       <div class="zf">
           <div class="zf-title">做法</div>
           <div class='menuBox' v-for="(j,index) in buzhouList" :key="index">
                <div style="margin:10px 10px">步骤{{index+1}}:</div>
                <div>
                        <van-uploader
                            v-model="j.buzhouFileList"
                            :preview-size="100"
                            :before-read="beforeRead"
                            :max-count="1"
                        />
                </div>
                <div>
                    <input type="text" v-model="j.steptInfo"  placeholder="请输入操作方法">
                </div>
            </div>
            <div class="addbuzhou" @click="addbuzhou">新增一行</div>
            <!-- {{buzhouList}} -->
       </div>
       <van-button type="primary" size="large" color="rgb(204, 118, 47)"  @click="pushData">发布菜谱</van-button>
   </div>
</template>
<script>
import headerTitle from '../components/headerTitle'
import axios from "axios"
import qs from 'qs'
export default {
    name: 'creation',
    components:{
        headerTitle
    },
    data () {
        return {
            title:'创建菜谱',
            mytitle:'',
            fileList:[],
            list:2,
            userDetail:{},
            intro:'',//内容
            fenlei:'早餐',
            shicaiList:[{
                Ingredients:'',
                Dosage:''
            }],
            buzhouList:[
                {
                    buzhouFileList:[],
                    steptInfo:''
                }
            ],
            option1:[{
                text:'早餐',
                value:0
            },{
                text:'午餐',
                value:0
            },{
                text:'晚餐',
                value:0
            },{
                text:'甜点',
                value:0
            },{
                text:'面食',
                value:0
            },{
                text:'饮品',
                value:0
            }]
        }
    },
    methods:{
        // 创建食谱
        pushData(){
            let creation = {};
            creation.recipeinto = {}
            creation.recipeinto.avatar = this.userDetail.avatar
            creation.recipeinto.name = this.userDetail.name
            creation.recipeinto.title = this.mytitle
            creation.recipeinto.intro = this.intro
            creation.recipeinto.coverimg = this.fileList[0].content
            creation.recipeinto.class = this.fenlei
            // console.log(creation)
            axios({
                headers:{'Content-Type':'application/x-www-form-urlencoded'},
                method:'post',
                url:'api/creation',
                data:qs.stringify(creation)
            }).then(res=>console.log("创建食谱",res))

            console.log("this.shicaiList",this.shicaiList)
            axios.post('api/createShicai', qs.stringify(this.shicaiList))
                    .then(function (response) {
                            // console.log(response);
                })
            axios.post('api/createStep', qs.stringify(this.buzhouList))
                    .then(function (response) {
                            // console.log(response);
                })

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
        getUserSucc(res){
            this.userDetail = res.data[0]
        },
        addshicai(){
            this.shicaiList.push({
                Ingredients:'',
                Dosage:''
            })
        },
        addbuzhou(){
            this.buzhouList.push({
                buzhouFileList:[],
                steptInfo:''
            })
        }
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
    .jj-select-fl{
        padding: 10px 0;
        background-color: #fff;
    }
}
.sc{
    .sc-title{
        margin: 10px;
        font-weight: bold;
    }
    .createShicai{
        padding: 10px 0;
        background-color: #fff;
        input{
            width: 41%;
        }
    }
    .addshicai{
        text-align: right;
        color: rgb(204, 118, 47);
    }
}
.zf{
    margin-bottom: 20px;
    .zf-title{
        margin: 10px;
        font-weight: bold;
    }
    .menuBox{
        padding: 10px 0;
        background-color: #fff;
    }
    .addbuzhou{
        text-align: right;
        color: rgb(204, 118, 47);
    }
}
.pushdata{
    text-align: center;
    background-color: #fff;
    line-height: 50px;
    height: 50px;
}
</style>