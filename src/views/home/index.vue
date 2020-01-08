<template>
  <div class="home">
    <div class="header">
      <div class="header_c">
        <div class="left">
          <span>郑州</span>
          <router-link to="/home/city" tag="div">
            <img src="../../assets/images/home/arrow_b.png" alt class="arrow_b" />
          </router-link>
        </div>
        <div class="center">
          <img class="search_icon" src="../../assets/images/home/search.png" alt />
          <!-- <input type="text" placeholder="搜影片、影院、影人" /> -->
          <router-link tag="input" to="/home/search" placeholder="搜影片、影院、影人" type="text"></router-link>
        </div>
        <div>
          <div style="width:60px"></div>
          <img src="../../assets/images/home/punch.png" alt class="punch" />
        </div>
      </div>
    </div>
    <better>
      <div class="content">
        <div class="banner">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
              <img :src="banner_01" alt />
            </swiper-slide>
            <swiper-slide>
              <img :src="banner_02" alt />
            </swiper-slide>
            <swiper-slide>
              <img :src="banner_03" alt />
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <div class="main">
          <div class="hot">
            <div class="title">
              <div class="left">
                <span></span>
                <span>热映影片</span>
              </div>
              <div class="right">
                <span>全部</span>
                <span class="arrow_r"></span>
              </div>
            </div>
            <div class="swiper">
              <swiper :options="hotSwiperOption" ref="myHotSwiper">
                <!-- slides -->
                <swiper-slide v-for="(item, index) in hotData" :key="index">
                  <img :src="item.src" alt />
                  <h4>{{item.title}}</h4>
                  <button>购票</button>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="future">
            <div class="title">
              <div class="left">
                <span></span>
                <span>即将上映</span>
              </div>
              <div class="right">
                <span>全部</span>
                <span class="arrow_r"></span>
              </div>
            </div>
            <div class="swiper">
              <swiper :options="futureSwiperOption" ref="myFutureSwiper">
                <!-- slides -->
                <swiper-slide v-for="(item, index) in futureData" :key="index">
                  <img :src="item.src" alt />
                  <h4>{{item.title}}</h4>
                  <span>{{item.data}}</span>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="advance">
            <div class="title">
              <div class="left">
                <span></span>
                <span>精选预告</span>
              </div>
              <div class="right">
                <span>更多</span>
                <span class="arrow_r"></span>
              </div>
            </div>
            <div class="swiper">
              <swiper :options="advanceSwiperOption" ref="myAdvanceSwiper">
                <swiper-slide v-for="(item, index) in advanceData" :key="index">
                  <video :id="item.id" class="video-js" :poster="item.src">
                    <source :src="item.videoSrc" type="video/mp4" />
                  </video>
                  <h4>{{item.title}}</h4>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </better>
    <footers />
  </div>
</template>
<script>
// @ is an alias to /src
import better from "@/components/better.vue";
import banner_01 from "@/assets/images/home/banner_01.png";
import banner_02 from "@/assets/images/home/banner_02.png";
import banner_03 from "@/assets/images/home/banner_03.png";
import hot_01 from "@/assets/images/home/hot_01.png";
import hot_02 from "@/assets/images/home/hot_02.png";
import hot_03 from "@/assets/images/home/hot_03.png";
import hot_04 from "@/assets/images/home/hot_04.png";
import future_01 from "@/assets/images/home/future_01.jpg";
import future_02 from "@/assets/images/home/future_02.jpg";
import future_03 from "@/assets/images/home/future_03.jpg";
import advance_01 from "@/assets/images/home/advance_01.png";
import advance_02 from "@/assets/images/home/advance_02.png";
import footers from "@/components/footer";
import Bscroll from "better-scroll";
import Xgplayer from "xgplayer-vue";
export default {
  name: "home",
  data() {
    return {
      banner_01,
      banner_02,
      banner_03,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        centeredSlides: true,
        slidesPerView: 1.3,
        effect: "coverflow",
        loop: true
      },
      hotSwiperOption: {
        slidesPerView: 3.5,
        spaceBetween: 15
      },
      futureSwiperOption: {
        slidesPerView: 2.5,
        spaceBetween: 15
      },
      advanceSwiperOption: {
        slidesPerView: 1.1,
        spaceBetween: 15
      },
      hotData: [
        {
          title: "傲慢与偏见",
          src: hot_01
        },
        {
          title: "韩国电影",
          src: hot_02
        },
        {
          title: "帕丁顿熊",
          src: hot_03
        },
        {
          title: "帕丁顿熊",
          src: hot_04
        }
      ],
      futureData: [
        {
          title: "My bluebery…",
          src: future_01,
          data: "1月5日"
        },
        {
          title: "THE WORLD…",
          src: future_02,
          data: "1月13日"
        },
        {
          title: "BABBIT HOLE",
          src: future_03,
          data: "1月13日"
        }
      ],
      advanceData: [
        {
          id: "video_01",
          title: "《大护法》是一部能够体现反专制、反乌托邦式的寓言动 画… ",
          src: advance_01,
          videoSrc: "https://media.w3.org/2010/05/sintel/trailer.mp4"
        },
        {
          id: "video_02",
          title: "《大护法》是一部能够体现反专制、反乌托邦式的寓言动 画… ",
          src: advance_02,
          videoSrc: "https://media.w3.org/2010/05/sintel/trailer.mp4"
        }
      ]
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    footers,
    Xgplayer,
    better
  },
  methods: {
    initVideo() {
      console.log(3);
      //初始化视频方法
      this.advanceData.forEach((element, index) => {
        var myPlayer = this.$video(element.id, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          // autoplay: false,
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          // width: "295x",
          //设置视频播放器的显示高度（以像素为单位）
          // height: "160px",
          setPlaybackRates: "430:265"
        });
      });
    }
  },
  mounted() {},
  created() {
    this.$nextTick(() => {
      this.initVideo();
    });
  }
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  height: 36px;
  padding: 5px;
  // margin-bottom: 12px;
}
.header_c {
  width: calc(100% - 40px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & input {
    display: block;
    outline: none;
    width: 259px;
    height: 36px;
    font-size: 14px;
    text-indent: 4em;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
    border-radius: 18px;
    border-color: transparent;
    box-sizing: border-box;
  }
  & .arrow_b {
    display: block;
    width: 12px;
    height: 6px;
    margin: 0 6px;
  }
  & .left {
    display: flex;
    align-items: center;
    span {
      white-space: nowrap;
      font-size: 14px;
      color: #dfdfdf;
    }
  }
  & .center {
    position: relative;
    img {
      position: absolute;
      width: 17px;
      height: 17px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      left: 12px;
    }
  }
  & .punch {
    display: block;
    width: 18px;
    height: 18px;
    margin-left: 6px;
  }
}
.banner {
  & .swiper-slide {
    display: block;
    width: 335px;
    height: 145px;
    & img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  & .swiper-pagination {
    position: static;
  }
}
.content {
  padding-bottom: 100px;
}
.main {
  .hot,
  .future,
  .advance {
    margin-top: 30px;
    & .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .left {
        font-size: 18px;
        color: #dfdfdf;
        span {
          float: left;
        }
        span:first-child {
          display: block;
          width: 4px;
          height: 17px;
          margin-right: 5px;
          background: linear-gradient(
            90deg,
            rgba(242, 97, 130, 1) 0%,
            rgba(241, 160, 100, 1) 100%
          );
        }
      }
      & .right {
        font-size: 12px;
        color: #dfdfdf;
        span {
          float: left;
        }
        .arrow_r {
          display: block;
          width: 6px;
          height: 10px;
          margin-left: 5px;
          background: url("~@/assets/images/home/arrow_r.png") no-repeat
            center/100% 100%;
        }
      }
    }
    & .swiper {
      margin-top: 11px;
      .swiper-slide {
        text-align: left;
        & h4 {
          margin: 10px 0 6px;
          line-height: 2;
          color: rgba(223, 223, 223, 1);
          font-size: 12px;
        }
        & button {
          width: 50px;
          height: 22px;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          font-size: 12px;
          color: rgba(223, 223, 223, 1);
          border-radius: 11px;
        }
      }
    }
  }
  .hot img {
    display: block;
    width: 90px;
  }
  .future img {
    display: block;
    width: 120px;
  }
  .advance img {
    display: block;
    width: 295px;
  }
}

.video-js {
  width: 100%;
  height: 160px;
}
</style>
<style lang="scss">
.banner {
  .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    background: rgba(178, 178, 178, 1);
    margin-left: 6px;
    transition: all 0.5s ease;
  }
  .swiper-pagination-bullet-active {
    width: 14px;
    height: 3px;
    background: rgba(255, 255, 255, 1);
    border-radius: 3px;
  }
}
</style>
