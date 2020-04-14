<template>
   <div class='detail'>
        <div class="mobile" v-if="this.$store.state.isMobile">
            <top-header />
            <div class="foodImg">
                <img :src="shipuData.coverimg" alt="">
            </div>
            <div style="background:#fff;padding: 0 20px;border-radius: 15px;">
                <div class="detailIntro">
                    <div class="introTop">
                        <div class="title">{{shipuData.title}}</div>
                        <!-- <div class="achievement flex-box">
                            <div class="collect">
                                <span>44</span>人收藏
                            </div>
                            <div class="like">
                                <span>41</span>人点赞
                            </div>
                        </div> -->
                        <div class="infor flex-b-sbc">
                            <div class="left flex-b-cc">
                                <div class="Portrait">
                                    <img :src="shipuData.avatar" alt="">
                                </div>
                                <div class="name">{{shipuData.name}}</div>
                            </div>
                            <div class="right" :class="col == 1?'rightcol':'rightnocol'" @click="collectionShipu(col)">
                                {{col == 1?'已收藏':'收藏'}}
                            </div>
                        </div>
                        <div class="content">{{shipuData.intro}}</div>
                    </div>
                </div>
                <ingredient :Ingredient="Ingredient"/>
                <div class="step">
                    <div class="stepTop flex-b-sbc">
                        <div class="left">烹饪步骤</div>
                        <div class="pattern"></div>
                    </div>
                    <step :shipuList="shipuList"/>
                </div>
                <!-- <div class="tips">
                    <div class="tipsTop">小贴士</div>
                    <div  class="tipsBottom">大米可以用波碎机打成糊，没有的可以这样做</div>
                </div> -->
                <div class="vueScroll">
                    <div class="vueScrollTitle">编辑推荐</div>
                    <scroll-view />
                </div>
                <div class="comment">
                    <div class="commentTop flex-b-sbc">
                        <div class="left">评论</div>
                        <router-link :to="{name: 'pinglun',query: {id:this.$route.query.id}}" tag="div" class="right">写评论</router-link>
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
        </div>
        <div class="pc" v-else>
            <div style="background:#f7f7f7">
                <nav>
                    <ul class="flex-box">
                        <li>首页</li>
                        <li style="color: #fff;">菜谱大全</li>
                    </ul>
                </nav>
                <div class="pc-detail">
                    <div class="detail-top">
                        <div class="detail-top-left">
                            <div class="detail-top-title">{{shipuData.title}}</div>
                            <div class="detail-top-img">
                                <img :src="shipuData.coverimg" alt="">
                            </div>
                            <div class="collect" :class="col == 1?'rightcol':'rightnocol'" @click="collectionShipu(col)">
                                {{col == 1?'已收藏':'收藏'}}
                            </div>
                        </div>
                        <div class="detail-top-right flex-box">
                            <div class="author-img">
                                <img :src="shipuData.avatar" alt="">
                            </div>
                            <div class="name">
                                <div>昵称：{{shipuData.name}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="detail-mid">
                        <div style="font-size:23px">需要食材</div>
                        <div class="shicai flex-box fw-wr" style="margin-top:20px">
                            <ul v-for="(i,index) in Ingredient" :key="index">
                                <li style="font-weight: bold;">{{i.Ingredients}}</li>
                                <li>{{i.Dosage}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="detail-foot">
                        <div class="title">
                            做法步骤
                        </div>
                        <ul class="step-box flex-box" v-for="(i,index) in shipuList" :key="index">
                            <li>
                                <img :src="i.img" alt="">
                            </li>
                            <li>
                                <div class="number">{{index+1}}</div>
                                <div class="text">{{i.text}}</div>
                            </li>
                        </ul>
                    </div>
                    <div class="pinglun">
                        <div style="font-size:23px;">用户评论</div>
                        <ul>
                            <li class="flex-box" v-for="(i,index) in pinglun" :key="index">
                                <div class="avatar">
                                    <img :src="i.avatar" alt="">
                                </div>
                                <div class="comment_textContent">
                                    <div class="comment_userinfo">{{i.name}}</div>
                                    <div class="comment_text">{{i.content}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>
<script>
import { Notify } from 'vant';
import topHeader from "../components/topHeader"
import ingredient from "../components/ingredient"
import step from "../components/step"
import scrollView from "../components/scrollView"
import comment from "../components/comment"
import { Toast  } from 'mint-ui'
import axios from "axios"
import qs from 'qs'

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
            pinglun:[],
            col:0
        }
    },
    mounted(){
        this.getShipu();
        this.getShipuData();
        this.getshipuIngredients();
        this.getpinglun();
        this.getCol("username")
    },
    methods:{
        // 获取食谱步骤
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
            this.shipuData = res.data[0]
            // console.log("3333333",res.data[0])
        },
        // 获取食材
        getshipuIngredients(){
            axios.get("api/shipuIngredients/"+this.$route.query.id).then(this.getshipuIngredientsSucc)
        },
        getshipuIngredientsSucc(res){
            this.Ingredient = res.data
            // console.log("3333333",res.data)
        },
        // 获取评论
        getpinglun(){
            axios.get("api/pinglun/"+this.$route.query.id).then(this.getpinglunSucc)
        },
        getpinglunSucc(res){
            this.pinglun = res.data
            // console.log("pinglun",res.data)
        },
        // 是否收藏
        getCol(username){
            let coldata = {}
            coldata.username = document.cookie.match(new RegExp("(^| )" + username + "=([^;]*)(;|$)"))[2]
            this.username = coldata.username
            // console.log(coldata.username)
            coldata.id = this.$route.query.id;
            axios({
                headers:{'Content-Type':'application/x-www-form-urlencoded'},
                method:'post',
                url:'api/select',
                data:qs.stringify(coldata)
            }).then(res=>{
                this.getColSucc(res);
            })
        },
        getColSucc(res){
            this.col = res.data.code
            // console.log(this.col)
            // console.log("pinglun",res.data.code)
        },
        collectionShipu(col){
            if(col == 1){
                Notify({ type: 'danger', message: '已收藏' });
            }
            else{
                let Inset = {};
                Inset.username = this.username;
                Inset.id = this.shipuData.id;
                Inset.name = this.shipuData.title;
                Inset.image = this.shipuData.coverimg;
                Inset.author = this.shipuData.name;
                // console.log(this.shipuData.author)
                // console.log(this.shipuData)
                axios({
                    headers:{'Content-Type':'application/x-www-form-urlencoded'},
                    method:'post',
                    url:'api/inset',
                    data:qs.stringify(Inset)
                }).then(res=>{
                    
                    this.getCol("username")
                    Notify({ type: 'success', message: '收藏成功' });
                })
            }
        }
    }
}
</script>
<style lang="less" scoped>

.rightcol{
    color: #f8d090;
    background-color: #fefbef;
}
.rightnocol{
    background-color: #feae4c;
    color:#fff;
}
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
.pc{
    nav{
        background-color: #FFC000;
        max-width: 1128px;
        margin: 0 auto;
        ul{
            li{
                margin-left: 20px;
                line-height: 60px;
                
            }
        }
    }
    .pc-detail{
        max-width: 1128px;
        margin: 60px auto;
        .detail-top{
            display: flex;
            justify-content: space-between;
            .detail-top-left{
                background-color: #fff;
                padding: 20px 10px;
                .detail-top-title{
                    font-size: 26px;
                    font-weight: lighter;
                    margin: 10px 0;
                }
                .detail-top-img{
                    img{
                        width: 752px;
                        height: 450px;
                    }
                }
            }
            .detail-top-right{
                background-color: #fff;
                padding: 20px 10px;
                height: 100px;
                width: 90%;
                margin-left: 10px;
                .author-img{
                    img{
                        width: 60px;
                        height: 60px;
                        border-radius: 5px;
                    }
                }
                .name{
                    margin-left: 10px;
                }
            }
            .collect{
                margin-top: 60px;
                float: right;
            }
        }
        .detail-mid{
            background-color: #fff;
            margin: 20px 0;
            padding: 20px 10px;
            width: 743px;
            .shicai{
                li{
                    padding: 20px 30px;
                }
            }
        }
        .detail-foot{
            background-color: #fff;
            margin: 20px 0;
            padding: 20px 10px;
            width: 743px;
            .title{
                font-size: 23px;
                margin-bottom: 20px;
            }
            .step-box{
                li{
                    margin: 10px 10px;
                    img{
                        width: 300px;
                        height: auto;
                    }
                    .number{
                        color: #333;
                        font-size: 38px;
                        line-height: 30px;
                        letter-spacing: 2px;
                        padding: 0;
                        margin-bottom: 12px;
                    }
                    .text{
                        width: 100%;
                        font-size: 18px;
                        color: #666;
                        line-height: 30px;
                        padding-left: 0;
                        padding-right: 0;
                        letter-spacing: 1px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 7;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
        .pinglun{
            background-color: #fff;
            margin: 20px 0;
            padding: 20px 10px;
            width: 743px;
            ul{
                margin-top: 20px;
                li{
                    margin: 10px 0;
                    height: 70px;
                    .avatar{
                        margin-right: 10px;
                        img{
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                        }
                    }
                    .comment_textContent{
                        .comment_userinfo{
                            margin-bottom: 6px;
                        }
                    }
                }
            }
        }
    }
}
</style>