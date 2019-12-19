<template>
   <div class='classify'>
    <div class="shop">
      <!-- 左边 -->
      <div class="menu-wrapper">
        <ul>
          <!-- current -->
          <li
            class="menu-item"
            @click="clickList(index)"
            ref="menuList"
            v-for="(item,index) in 36"
            :key="index"
            >
            <span>11111</span>

          </li>
        </ul>
      </div>
      <!-- 右边 -->
      <div class="shop-wrapper">
        <ul ref="itemList">
          <li class="shops-li">
            <div class="shops-title">
              <h4>asdasd</h4>
              <a href="">查看更多 > </a>
            </div>
            <ul class="phone-type">
              <li>
                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1576671417&di=c43db9b86207700901846f5601a86838&src=http://b-ssl.duitang.com/uploads/item/201603/15/20160315222418_HLBYJ.jpeg" alt="">
              </li>
            </ul>
            <ul class="shops-items">
              <li>
                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1576671417&di=c43db9b86207700901846f5601a86838&src=http://b-ssl.duitang.com/uploads/item/201603/15/20160315222418_HLBYJ.jpeg" alt="">
                <span>wwwww</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
   </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name: 'classify',
    data () {
    return {

    }
    }
}
</script>
<style lang='less' scoped>
  .classify{
      width: 100%;
      height: 100%;
      background-color: #f5f5f5;
      overflow: hidden;
      .shop{
          display: flex;
          position: absolute;
          top:0;
          bottom: 50px;
          width: 100%;
          overflow: hidden;
          .menu-wrapper{
              background-color: #e0e0e0;
              width: 80px;
              flex:0 0 80px;
              .menu-item{
                  width: 100%;
                  height: 60px;
                  background-color: #fafafa;
                  display:flex;
                  justify-content: center;
                  align-items: center;
                  font-family: lighter;
                  color: #666;
                  position: relative;
              }
              .corrent{
                  color: #e02e24;
                  background-color: #fff;
              }
              .corrent::befor{
                  content:'';
                  background-color: #e02e24;
                  width: 4px;
                  height: 30px;
                  position: absolute;
                  left: 0;
              }
          }
          .shop-wrapper{
              flex:1;
              background-color: #fff;
              .shops-title{
                  display: flex;
                  flex-direction: row;
                  padding:0 10px;
                  height: 40px;
                  align-items: center;
                  justify-content: space-between;
                  color: #999;
              }
              a{
                  text-decoration: none;
                  color: #9c9c9c;
                  font-size: 14px;
              }
              .shops-items{
                  display:flex;
                  flex-wrap: wrap;
                  li{
                        display: flex;
                        flex-direction: column;
                        width: 33.3%;
                        height: 90px;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 60%;
                            height: 60%;
                            margin-bottom: 5px;
                        }
                        span{
                            color: #151516;
                            font-size: 13px;
                        }
                  }
              }
              .phone-type{
                  width: 100%;
                  display: flex;
                  flex-direction: row;
                  flex-wrap: wrap;
                  border-bottom: 1px solid #ccc;
                  li{
                      width: 33.3%;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin: 5px 0;
                      img{
                          width: 70%;
                      }
                  }
              }
          }
      }
  }
</style>