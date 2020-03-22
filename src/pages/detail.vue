<template>
   <div class='detail'>
        <top-header />
        <div class="foodImg">
            <img :src="shipuData[0].coverimg" alt="">
        </div>
        <div style="background:#fff;padding: 0 20px;border-radius: 15px;">
            <div class="detailIntro">
                <div class="introTop">
                    <div class="title">{{shipuData[0].title}}</div>
                    <div class="achievement flex-box">
                        <div class="collect">
                            <span>44</span>人收藏
                        </div>
                        <div class="like">
                            <span>41</span>人点赞
                        </div>
                    </div>
                    <div class="infor flex-b-sbc">
                        <div class="left flex-b-cc">
                            <div class="Portrait">
                                <img :src="shipuData[0].avatar" alt="">
                            </div>
                            <div class="name">{{shipuData[0].name}}</div>
                        </div>
                        <div class="right">
                            关注
                        </div>
                    </div>
                    <div class="content">{{shipuData[0].intro}}</div>
                </div>
            </div>
            <ingredient :Ingredient="Ingredient"/>
            <div class="step">
                <div class="stepTop flex-b-sbc">
                    <div class="left">烹饪步骤</div>
                    <div class="pattern">进入烹饪模式</div>
                </div>
                <step :shipuList="shipuList"/>
            </div>
            <!-- <div class="tips">
                <div class="tipsTop">小贴士</div>
                <div  class="tipsBottom">大米可以用波碎机打成糊，没有的可以这样做</div>
            </div> -->
            <div class="vueScroll">
                <div class="vueScrollTitle">相关菜谱</div>
                <scroll-view />
            </div>
            <div class="comment">
                <div class="commentTop flex-b-sbc">
                    <div class="left">评论</div>
                    <div class="right">写评论</div>
                </div>
                <div class="commentBottom">
                    <comment :pinglun="pinglun"/>
                </div>
            </div>
            <!-- <div class="vueScroll">
                <div class="vueScrollTitle">包含这道菜的专辑</div>
                <scroll-view />
            </div> -->
        </div>

        <!-- <div style="height:1000px;"></div> -->
   </div>
</template>
<script>
import topHeader from "../components/topHeader"
import ingredient from "../components/ingredient"
import step from "../components/step"
import scrollView from "../components/scrollView"
import comment from "../components/comment"
import axios from "axios"

export default {
    name: 'detail',
    components:{
        topHeader,
        ingredient,
        step,
        scrollView,
        comment
    },
    data () {
        return {
            shipuList:[],
            shipuData:{},
            Ingredient:[],
            pinglun:[]
        }
    },
    mounted(){
        // console.log(this.$route.query.id)
        this.getShipu();
        this.getShipuData();
        this.getshipuIngredients();
        this.getpinglun()
    },
    methods:{
        // 获取食谱
        getShipu(){
            axios.get("api/shipu/"+this.$route.query.id).then(this.getShipuSucc)
        },
        getShipuSucc(res){
            this.shipuList = res.data
            // console.log("3333333",res)
        },
        // 获取食谱详情
        getShipuData(){
            axios.get("api/shipuData/"+this.$route.query.id).then(this.getShipuDataSucc)
        },
        getShipuDataSucc(res){
            this.shipuData = res.data
            // console.log("3333333",res.data)
        },

        // 获取食材
        getshipuIngredients(){
            axios.get("api/shipuIngredients/"+this.$route.query.id).then(this.getshipuIngredientsSucc)
        },
        getshipuIngredientsSucc(res){
            this.Ingredient = res.data
            console.log("3333333",res.data)
        },
        // 获取评论
        getpinglun(){
            axios.get("api/pinglun/"+this.$route.query.id).then(this.getpinglunSucc)
        },
        getpinglunSucc(res){
            this.pinglun = res.data
            console.log("pinglun",res.data)
        },
    }
}
</script>
<style lang="less" scoped>
.detail{
    .foodImg{
        position: sticky;
        top:0;
        z-index: -99;
        width: 100%;
        height: 300px;
        img{
            width:100%;
            height: 100%;
        }
    }
    .detailIntro{
        margin: -10px 0;
        width: 100%;

        z-index: 999;

        .introTop{
            // margin: 0 20px;
            .title{
                padding: 30px 0;
                font-weight: bold;
                font-size: 23px;
            }
            .achievement{
                margin: 20px 0;
                font-size: 13px;
                color: #999;
                .collect{
                    margin-right: 20px;
                }
                .like{

                }
            }
            .infor{
                margin: 20px 0;
                .left{
                    .Portrait{
                        margin-right: 10px;
                        width: 35px;
                        height: 35px;
                        border-radius: 50%;
                        overflow: hidden;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .name{

                    }
                }
                .right{
                    padding:5px 30px;
                    color: #f8d090;
                    background-color: #fefbef;
                }
            }
            .content{
                line-height: 23px;
                font-size: 16px;
                color: #5a5a5a;
            }
        }
        
    }
    .step{
        .stepTop{
            margin-bottom: 30px;
            // padding: 0 20px;
            .left{
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
    .tips{
        margin: 0 auto;
        .tipsTop{
            margin: 20px 0;
            font-size: 18px;
            font-weight: bold;
        }
        .tipsBottom{
            margin: 10px 0 80px 0;
        }
    }
    .vueScroll{
        .vueScrollTitle{
            margin: 20px 0;
            font-size: 18px;
            font-weight: bold;
        }
    }
    
}
</style>