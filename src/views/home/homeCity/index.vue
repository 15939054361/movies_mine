<template>
  <div class="city">
    <div class="topBar">
      <div class="left" @click="close">关闭</div>
      <div class="center">选择城市</div>
      <div class="right"></div>
    </div>
    <div class="header">
      <div class="left">
        <img :src="serach" alt />
        <input type="text" placeholder="输入城市" />
      </div>
      <router-link to="/home" class="cancle" tag="span">取消</router-link>
    </div>
    <better :el="el" ref="better">
      <div class="content">
        <div class="location">
          <div class="title">定位城市</div>
          <div class="location_main">{{position}}</div>
        </div>
        <div class="history">
          <div class="title">历史访问城市</div>
          <div class="history_main">上海</div>
        </div>
        <div class="hot">
          <div class="title">热门城市</div>
          <ul class="hot_main">
            <li v-for="item in hotData" :key="item.name">{{item.name}}</li>
          </ul>
        </div>
        <ul class="city_nav">
          <li
            :id="item.id"
            class="nav_item"
            v-for="(item,index) in cityData"
            :key="index"
          >{{item.name}}</li>
        </ul>
        <div class="left"></div>
      </div>
    </better>
    <ul class="letter_nav" v-move>
      <li v-for="(item) in letter" :key="item">{{item}}</li>
    </ul>
    <div class="mask_letter" :hidden="hidden">{{current_letter}}</div>
  </div>
</template>

<script>
import serach from "@/assets/images/home/search.png";
import serach_act from "@/assets/images/search/search.png";
import better from "@/components/better.vue";
import cityData from "./cityData.json";
export default {
  name: "homeCity",
  props: {},
  data() {
    return {
      position: "正在定位中",
      el: " ",
      hidden: true,
      cityData: [],
      hotData: [],
      letter: [],
      current_letter: "z",
      serach,
      serach_act,
      refer: ["影火虫热搜"],
      referData: [
        { title: "一条狗的使命", icon: "" },
        { title: "哥斯拉2:怪兽之王 ", icon: "" },
        { title: "大鱼海棠 ", icon: "" },
        { title: "下一任：前任 ", icon: "" },
        { title: "人间.小团圆  ", icon: "" },
        { title: "音乐家 ", icon: "" },
        { title: "爱你直到世界尽头 ", icon: "" }
      ]
    };
  },
  computed: {},
  created() {
    let arr = [];
    for (var i in cityData) {
      if (i === "hot") {
        this.hotData.push(...cityData[i]);
      } else {
        this.letter.push(i);
        arr.push({ name: i, id: i });
        arr.push(...cityData[i]);
      }
    }
    this.cityData = arr;
    this.location();
  },

  directives: {
    move: {
      inserted(e, binding, { context }) {
        let ulH = e.offsetHeight;
        var startY = e.offsetTop;
        var targetY = 0;
        var index = 0;
        let dis = 0;
        // 开始
        e.ontouchstart = () => {
          context.hidden = false;
          targetY = event.changedTouches[0].clientY;
          dis = targetY - startY;
          index = Math.floor(
            ((targetY - startY) / ulH) * context.letter.length
          );
          if (dis < 0) {
            index = 0;
          }
          if (dis > ulH) {
            index = context.letter.length - 1;
          }
          context.current_letter = context.letter[index];
          //目标节点
          context.el = context.letter[index];
          // 过程
          e.ontouchmove = () => {
            targetY = event.changedTouches[0].clientY;
            dis = targetY - startY;
            index = Math.floor(
              ((targetY - startY) / ulH) * context.letter.length
            );
            if (dis < 0) {
              index = 0;
            }
            if (dis > ulH) {
              index = context.letter.length - 1;
            }
            context.current_letter = context.letter[index];
            context.el = context.letter[index];
            context.$refs.better.roll();
          };
        };
        e.ontouchend = () => {
          context.hidden = true;
        };
        // 结束
      }
    }
  },
  mounted() {},
  methods: {
    link() {
      console.log(3);
    },
    close() {
      this.$router.go(-1);
    },
    location() {
      let that = this;
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          that.position = r.address.city;
        } else {
          alert("failed" + this.getStatus());
        }
      });
    }
  },
  components: {
    better
  }
};
</script>

<style scoped lang="scss">
.city {
  height: 100%;
}
.topBar {
  width: calc(100% - 40px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .left,
  .right {
    width: 32px;
    height: 16px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(247, 247, 247, 1);
    line-height: 16px;
  }
  .center {
    width: 72px;
    height: 18px;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(245, 245, 245, 1);
    line-height: 18px;
  }
}
.header {
  width: calc(100% - 40px);
  margin: 30px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & input {
    width: 298px;
    height: 36px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
    border-radius: 18px;
    text-indent: 4em;
    font-size: 14px;
    color: rgba(122, 122, 122, 1);
  }
  & .cancle {
    width: 32px;
    height: 16px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(247, 247, 247, 1);
    line-height: 16px;
  }
  & img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 17px;
    margin: auto 0;
    display: block;
    width: 17px;
    height: 17px;
  }
  & .left {
    position: relative;
  }
}
.wrapper {
  overflow: hidden;
}
.content {
  position: relative;
  padding-top: 19px;
  padding-bottom: 50px;
  text-align: left;
  .location,
  .history,
  .hot {
    & .title {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(247, 247, 247, 1);
      line-height: 12px;
      margin: 20px 0;
    }
  }
  .hot_main {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    li {
      width: 90px;
      height: 30px;
      margin-bottom: 20px;
      margin-right: 20px;
      line-height: 30px;
      text-align: center;
      background: rgba(51, 54, 61, 1);
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(247, 247, 247, 1);
    }
  }
  .location_main,.history_main {
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(247, 247, 247, 1);
    border: 2px solid rgba(249, 195, 74, 1);
  }
  .city_nav {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(247, 247, 247, 1);
    line-height: 14px;

    li {
      margin: 40px 0;
    }
  }
}
.letter_nav {
  position: absolute;
  top: 120px;
  right: 20px;
  li {
    margin: 2px 0;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(130, 130, 130, 1);
    line-height: 17px;
  }
}
.mask_letter {
  width: 80px;
  height: 80px;
  color: rgba(225, 225, 225, 1);
  line-height: 80px;
  text-align: center;
  font-size: 30px;
  border-radius: 5px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
}
</style>
