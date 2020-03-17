<template>
   <div class='home'>
       <div class="home-top flex-box flex-b-sac">
           <div class="top-left iconfont">&#xe644;</div>
           <div class="top-search flex-box">
               <div class="search-box">
                   <router-link to="/search" class="search-item">
                       <input type="text" class="input-box"  placeholder="搜索 菜谱/课程/用户">
                   </router-link>
               </div>
               <div class="glass iconfont">&#xe613;</div>
           </div>
           <div class="top-right iconfont">&#xe616;</div>
       </div>
       <div class="slideshow">
           <el-carousel height="150px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
       </div>
       <div class="classify flex-b-sac">
           <router-link to="classify" class="listItem" tag="div">
               <div class="item">
                   <img src="../assets/img/fenlei.jpg" alt="">
               </div>
               <p class="simple-ellipsis1">菜谱分类</p>
           </router-link>
           <div class="listItem">
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
           </div>
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
                <menu-card></menu-card>
           </div>
       </div>
        <nav-bottom />
   </div>
</template>
<script>
import menuCard from "../components/menuCard"
import navBottom from "../components/nav"
export default {
    name: 'home',
    components:{
        menuCard,
        navBottom
    },
    data () {
        return {
            
        }
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
        padding: 0 10px;
        .el-carousel__item{
            border-radius:10px; 
            background-color: #66ccff;
        }
        
        background-color: #f3f3f3;
    }
    .classify{
        background-color:#fff;
        height: 406px/2;
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
        margin-bottom: 30px;
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
            background-color: #f2f2f2;
        }
    }
}
</style>