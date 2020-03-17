<template>
   <div class='scrollView' >
        <div
            @touchstart="touchstart"
            @touchmove="touchmove"
            @touchend="touchend"
            ref="scroll"
            class="scrollViewBox"
            :style="scrollStyle"
        >    
            <div class="scrollCard"  ref="scrollCard">
                <div class="scrollCardImg">
                    <img src="http://bd.hqcanyin.net/uploads/180128/1-1P12Q6211V94.jpg" alt="">
                </div>
                <div class="scrollCardTitle">
                    必吃的广东小吃——广州肠
                </div>
                <div class="scrollCardIntro">
                    婷姐新煮意
                </div>
            </div>
            <div class="scrollCard"  ref="scrollCard">
                <div class="scrollCardImg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2405969405,144339431&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="scrollCardTitle">
                    北京烤鸭
                </div>
                <div class="scrollCardIntro">
                    好好
                </div>
            </div>
            <div class="scrollCard"  ref="scrollCard">
                <div class="scrollCardImg">
                    <img src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=da49bfb386d4b31ce4319ce9e6bf4c1a/622762d0f703918f3048993a5c3d269758eec4a1.jpg" alt="">
                </div>
                <div class="scrollCardTitle">
                    辣子鸡
                </div>
                <div class="scrollCardIntro">
                    婷姐新煮意
                </div>
            </div>
            <div class="scrollCard"  ref="scrollCard">
                <div class="scrollCardImg">
                    <img src="http://bd.hqcanyin.net/uploads/180128/1-1P12Q6211V94.jpg" alt="">
                </div>
                <div class="scrollCardTitle">
                    必吃的广东小吃——广州肠
                </div>
                <div class="scrollCardIntro">
                    婷姐新煮意
                </div>
            </div>
            <div class="scrollCard"  ref="scrollCard">
                <div class="scrollCardImg">
                    <img src="http://bd.hqcanyin.net/uploads/180128/1-1P12Q6211V94.jpg" alt="">
                </div>
                <div class="scrollCardTitle">
                    必吃的广东小吃——广州肠
                </div>
                <div class="scrollCardIntro">
                    婷姐新煮意
                </div>
            </div>
            <div class="scrollCard"  ref="scrollCard">
                <div class="scrollCardImg">
                    <img src="http://bd.hqcanyin.net/uploads/180128/1-1P12Q6211V94.jpg" alt="">
                </div>
                <div class="scrollCardTitle">
                    必吃的广东小吃——广州肠
                </div>
                <div class="scrollCardIntro">
                    婷姐新煮意
                </div>
            </div>
        </div>
   </div>
</template>
<script>
export default {
    name: 'scrollView',
    data () {
        return {
            flag: false,
            startX: 0,
            endX: 0,
            scrollStyle:{
                left:0
            }
        }
    },  
    methods: {
        touchstart(e){
            // console.log("开始",e)
            this.startX = e.touches[0].clientX;
            this.endX = this.$refs.scroll.offsetLeft;
            console.log("this.endX",this.endX)
        },
        touchmove(e){
            let moveX = this.endX + (e.touches[0].clientX - this.startX);
            let scrollWidth = this.$refs.scrollCard.offsetWidth*6-30*6
            // console.log("滚动的距离",moveX)
            if(moveX < 20 && moveX > -scrollWidth){
                this.scrollStyle.left = moveX+"px"
            }
        },
        touchend(e){
            console.log("结束",e)
        }
    }
}
</script>
<style lang="less" scoped>
.scrollView{
    width: 100%;
    overflow: hidden;
    .scrollViewBox{
        position: relative;
        display: flex;
        .scrollCard{
            margin-right: 30px;
            .scrollCardImg{
                width: 200px;
                height: 150px;
                border-radius: 10px;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .scrollCardTitle{
                margin: 20px 0;
                font-size: 16px;
            }
            .scrollCardIntro{
                margin: 20px 0;
                font-size: 13px;
                color: #ccc;
            }
        }
    }
}
</style>