<template>
  <div>
      <div>
          <header-title :title="title"/>
      </div>
      <div class="cascad-menu" ref="cascadMenu">
        <scroll class="left-menu" :data="classList" ref="leftMenu">
            <div class="left-menu-container">
                <ul>
                <li
                  class="left-item"
                  ref="leftItem"
                  :class="{'current': currentIndex === index}"
                  @click="selectLeft(index, $event)"
                  v-for="(item, index) in classList"
                  :key="index">
                    <p class="text simple-ellipsis1">{{item.classname}}</p>
                </li>
                </ul>
            </div>
        </scroll>
        <scroll class="right-menu" :data="classList" ref="rightMenu" @scroll="scrollHeight" :listenScroll="true" :probeType="3">
            <div class="right-menu-container">
                <ul>
                    <li class="right-item" ref="rightItem" v-for="(item, index) in classList" :key="index">
                        <div class="title">{{item.classname}}</div>
                        <ul>
                            <li>
                                <div class="data-wrapper">
                                    <div class="data flex-b-sac">
                                        <div class="data-text">
                                            {{item.itemone}}
                                        </div>
                                        <div class="data-icon">
                                            <img :src="item.itemoneimg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="data-wrapper">
                                    <div class="data flex-b-sac">
                                        <div class="data-text">
                                            {{item.itemtwo}}
                                        </div>
                                        <div class="data-icon">
                                            <img :src="item.itemtwoimg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="data-wrapper">
                                    <div class="data flex-b-sac">
                                        <div class="data-text">
                                            {{item.itemthree}}
                                        </div>
                                        <div class="data-icon">
                                            <img :src="item.itemthreeimg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from '../components/scroll'
import headerTitle from '../components/headerTitle'
import axios from "axios"
export default {
  components: {
    Scroll,
    headerTitle
  },
  data () {
    return {
      rightTops: [],
      scrollY: 0,
      leftScrollY: 0,
      title:'菜谱分类',
      menus: [
        {
          name: '菜单1',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            }
          ]
        },
        {
          name: '菜单8',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单2',
          data: [
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单3',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        }
      ],
      classList:[],
      currentIndex:0
    }
  },
  computed: {
    // currentIndex () {
    //   // 当用户在滚动时，需要计算当前滚动距离在哪个(右边li块)区间内，并拿到它的 `index`
    //   const { scrollY, rightTops } = this
    //   // console.log('scrollY: ', scrollY)
    //   // console.log('rightTops: ', rightTops)
    //   let index = rightTops.findIndex((height, index) => {
    //     return scrollY >= rightTops[index] && scrollY < rightTops[index + 1]
    //   })
    // //   if (scrollY > rightTops[index] + 50) {
    // //     index++
    // //   }
    // //   console.log('currentIndex: ', index)
    //   return index
    // },
    
  },
  methods: {
    selectLeft (index, event) {
      // 添加`$event`是为了区分原生点击事件还是 better-scroll派发的事件
      console.log('selectLeft - index: ', index)
      this.currentIndex = index
      if (!event._constructed) {
        return
      }
      let rightItem = this.$refs.rightItem
      let el = rightItem[index]
      this.$refs.rightMenu.scrollToElement(el, 300)
    },
    scrollHeight (pos) {
      // console.log('scrollHeight - pos: ', pos)
      this.scrollY = Math.abs(Math.round(pos.y))
    },
    _calculateHeight () {
      // 计算右边列表每一块的高度
      let lis = this.$refs.rightItem
      console.log("lis",this.$refs.rightItem)
      let height = 0
      this.rightTops.push(height)
      Array.from(lis).forEach(li => {
        height += li.clientHeight
        this.rightTops.push(height)
      })
    },
    // 获取分类
        getClassList(){
            axios.get('api/class').then(this.getClassListSuccs)
        },
        getClassListSuccs(res){
            this.classList = res.data
            console.log(res)
        },
  },
  mounted () {
    // this.$nextTick(() => {
    //   this._calculateHeight()
    // })
    console.log(this.$route.params)
    this.getClassList()
  }
}
</script>

<style lang="less" scoped>
.cascad-menu {
  display: flex;
  position: absolute;
  top: 60px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  .left-menu {
    flex: 0 0 80px;
    width: 80px;
    background: #fff;
    .left-item {
      margin: 12px 0;
      height: 53px;
      width: 100%;
      overflow: hidden;
    //   margin-left: -20px;
      &.current {
        width: 200%;
        // margin-left: -40px;
        background: #f3f5f7;
        
        border-left:3px solid #f56817;
        color: #f56817;
      }
      .text {
        margin: 5px 0;
        margin-left: 5px;
        padding-left: 10px;
        width: 100%;
        line-height: 20px;
        font-size: 13px;
      }
    }
  }
  .right-menu {
    flex: 1;
    background-color: #f3f5f7;
    .right-item {
      height: 100%;
    //   margin-left: -40px;
    //   border: 1px solid #ccc;
      .title {
        // border-bottom: 1px solid #ccc;
        height: 20px;
      }
      .data-wrapper {
        margin: 20px 20px;
        border-radius: 10px;
        background-color: #fff;
        .data {
        //   height: 40px;
        //   margin-left: -40px;
            height: 100px;
            .data-text{
            }
            .data-icon{
                width: 50px;
                height: 50px;
                img{
                    width:100%;
                    height: 100%;
                }
            }
        }
      }
    }
  }
}
</style>