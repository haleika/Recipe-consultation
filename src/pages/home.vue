<template>
   <div class='home'>
        <div class="mobile" v-if="this.$store.state.isMobile">
            <transition name="van-slide-right">
                <div>
                    <div class="home-top flex-box flex-b-sac">
                        <router-link to="/creation" tag='div' class="top-left iconfont">&#xe644;</router-link>
                        <div class="top-search flex-box">
                            <div class="search-box">
                                <router-link to="/search" class="search-item">
                                    <input type="text" class="input-box"  placeholder="搜索 菜谱">
                                </router-link>
                            </div>
                            <div class="glass iconfont">&#xe613;</div>
                        </div>
                        <div class="top-right iconfont">&#xe616;</div>
                    </div>
                    <div class="slideshow" style="height:200px;width:100%;background:#fff;">
                        <mt-swipe :auto="4000" class="my_swiper">
                                <mt-swipe-item v-for="item in scrollData" :key="item.index">
                                    <img class="img" :src="item.img" style="width:100%;height:200px">
                                </mt-swipe-item>
                            </mt-swipe>
                    </div>
                    <div class="classify flex-b-sac">
                        <router-link :to="{name:'classify',params:classList}" class="listItem" tag="div">
                            <div class="item">
                                <img src="../assets/img/fenlei.jpg" alt="">
                            </div>
                            <p class="simple-ellipsis1">菜谱分类</p>
                        </router-link>
                        <!-- <div class="listItem">
                            <div class="item">
                                <img src="../assets/img/qiandao.jpg" alt="">
                            </div>
                            <p class="simple-ellipsis1">签到奖励</p>
                        </div>
                        <div class="listItem">
                            <div class="item">
                                <img src="../assets/img/clsaa.jpg" alt="">
                            </div>
                            <p class="simple-ellipsis1">厨艺课堂</p>
                        </div> -->
                        <div class="listItem">
                            <div class="item">
                                <img src="../assets/img/winter.jpg" alt="">
                            </div>
                            <p class="simple-ellipsis1">冬季菜谱</p>
                        </div>
                    </div>
                    <div class="push">
                        <div class="push-top flex-b-sbc">
                            <div class="push-title flex-box">
                                <h1>每周新菜</h1>
                                <p>每周优质菜推送</p>
                            </div>
                            <div class="push-more">更多></div>
                        </div>
                        <div class="push-list">
                                <menu-card :recipeList = "recipeList"></menu-card>
                        </div>
                    </div>
                </div>
            </transition>
            <nav-bottom />
        </div>
        <div class="pc" v-else>
            <div style="background:#f7f7f7">
                <nav>
                    <ul class="flex-box">
                        <li style="color: #fff;">首页</li>
                        <li>菜谱大全</li>
                    </ul>
                </nav>
                <div class="swiper">
                    <el-carousel :interval="4000" type="card" height="300px">
                        <el-carousel-item v-for="(item,index) in scrollData" :key="index">
                            <img :src="item.img" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="list">
                <div class="list-text">--今天适合吃什么--</div>
                <div class="list-box flex-box fw-wr">
                    <router-link
                        tag="div"
                        :to="{name: 'detail', query: { id : item.id }}"
                        class="list-item"
                        v-for="(item,index) in recipeList"
                        :key="index"
                    >
                        <div class="item-img">
                            <img :src="item.coverimg" alt="">
                        </div>
                        <div class="item-title">{{item.title}}</div>
                        <div class="item-name">{{item.name}}</div>
                    </router-link>
                </div>
            </div>
        </div>
   </div>
</template>
<script>
import menuCard from "../components/menuCard"
import navBottom from "../components/nav"
import { Swipe, SwipeItem } from 'mint-ui'
import { Lazyload } from 'vant';
import axios from "axios"
export default {
    name: 'home',
    components:{
        menuCard,
        navBottom,
        "mtSwipe":Swipe,
        "mtSwipeItem":SwipeItem
    },
    data () {
        return {
            scrollData:{},
            recipeList:[],
            classList:[]
        }
    },
    methods:{
        getScrollData(){
            axios.get('api/scroll').then(this.getScrollDataSuccs);
        },
        getScrollDataSuccs(res){
            // console.log(res);
            this.scrollData = res.data
            
            // console.log(this.scrollData);
        },
        getRecipeList(){
            axios.get('api/recipe').then(this.getRecipeListSuccs)
        },
        getRecipeListSuccs(res){
            this.recipeList = res.data
            // console.log("8888",this.recipeList)
        }
    },
    mounted(){
        this.getScrollData();
        this.getRecipeList();
    }
}
</script>
<style lang="less" scoped>
.home{
    .home-top{
        padding:0 10px;

        background-color: #f3f3f3;
        .top-left{
            font-size: 23px;
            font-weight: bold;
        }
        .top-search{
            position: relative;
            margin: 10px;
            .search-box{
                .search-item{
                    .input-box{
                        border: none;
                        border-radius: 10px;
                        height: 74px/2;
                        width: 16rem;
                        text-indent:40px;

                        box-shadow:-1px 0 5px 2px #ccc;
                    }
                }
            }
            .glass{
                position: absolute;
                top: 50%;
                left:20px;
                transform: translateY(-50%)
            }
        }
        .top-right{
            font-size: 23px;

        }
    }
    .slideshow{
        
        background-color: #f3f3f3;
    }
    .classify{
        background-color:#fff;
        height: 250px/2;
        .listItem{
            .item{
                text-align: center;
                img{
                    width: 60px/2;
                    height: 60px/2;
                }
            }
            p{
                margin-top:10px;
                font-size: 13px;
            }
        }
    }
    .push{
        margin-bottom: 60px;
        .push-top{
            padding: 0 7px;
            .push-title{
                h1{
                    font-size: 23px;
                    font-weight: bold;
                }
                p{
                    padding-top:11px;
                    margin-left: 10px;
                    font-size: 13px;

                    color: #999;
                }
            }
            .push-more{
                border: 1px solid #ccc;
                padding:4px 16px;
                border-radius: 10px;
                font-size: 13px;

                color: #ccc;
            }
        }
        .push-list{
            padding: 0 7px;
            height: 100%;
            background-color: #f2f2f2;
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
        .swiper{
            max-width: 1128px;
            margin: 40px auto;
            img{
                width: 100%;
                height: 300px;
            }
        }
        .list{
            max-width: 1128px;
            margin: 40px auto;
            .list-text{
                text-align: center;
                font-size: 23px;
            }
            .list-box{
                margin-top: 30px;
                .list-item{
                    margin-right: 30px;
                    background-color: #f7f7f7;
                    .item-img{
                        img{
                            width: 250px;
                            height: 250px;
                        }
                    }
                    .item-title{
                        margin: 10px 0;
                    }
                    .item-name{
                        margin: 10px 0;
                        font-size: 13px;
                        color:#777;
                    }
                } 
            }
        }
    }
}
</style>