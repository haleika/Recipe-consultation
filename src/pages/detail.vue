<template>
   <div class='detail'>
        <top-header />
        <div class="foodImg">
            <img src="https://img.alicdn.com/imgextra/i1/4057485658/O1CN01wXWjcg1rfPSHPXE1G_!!4057485658.jpg" alt="">
        </div>
        <div class="detailIntro">
            <div class="introTop">
                <div class="title">广州肠粉</div>
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
                            <img src="https://ak.hypergryph.com/upload/images/20190228/32ddf0470a305376204d1312ca4720f9.jpg" alt="">
                        </div>
                        <div class="name">Heyinb</div>
                    </div>
                    <div class="right">
                        关注
                    </div>
                </div>
                <div class="content">肠粉始于唐朝，源于泷州(今罗定)。因为是唐朝泷州龙龛道场一名叫惠积的佛家人无意发明，所以又叫惠积糍、龙龛糍。[1]广州肠粉是广州
                    茶楼、酒家早茶夜市的必备之品，同时也是很多市民早餐的必选之品。布拉肠粉是将米浆置于布上蒸成，又叫布拉蒸肠粉。以往经常由流动小贩在街角出售斋肠，大部份已转为
                    铺位经营，一般会将肠粉切断，吃时再加入芝麻、甜酱及辣酱调味。注意，猪肠粉与肠粉并非同一类食物，但某些食客会将之混淆。猪肠.料呆然同旦米将生作A旦却上 肠粉不同陆</div>
            </div>
        </div>
        <ingredient />
        <!-- <div style="height:1000px;"></div> -->
   </div>
</template>
<script>
import topHeader from "../components/topHeader"
import ingredient from "../components/ingredient"

export default {
    name: 'detail',
    components:{
        topHeader,
        ingredient
    },
    data () {
        return {
            
        }
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
        border-radius: 15px;

        background-color: #fff;

        z-index: 999;

        .introTop{
            margin: 0 20px;
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
}
</style>