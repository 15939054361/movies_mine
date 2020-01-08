<template>
  <div class="search">
    <div class="header">
      <div class="left">
        <img :src="serach" alt />
        <input type="text" placeholder="搜影片、影院、影人" />
      </div>
      <router-link to="/home" class="cancle" tag="span">取消</router-link>
    </div>
    <better>
      <div class="content">
        <div class="refer">
          <img :src="serach_act" alt />
          <h4 v-for="(item, index) in refer" :key="index">{{item}}</h4>
        </div>
        <div class="refer_main">
          <div v-for="(item, index) in referData" :key="index" class="refer_item">
            <span>{{item.title}}</span>
            <img src alt />
          </div>
          <router-link
            class="refer_more"
            :to="{path:'/home'}"
            style="position:relative; z-index:99999"
          >更多热搜 &nbsp;&nbsp;></router-link>
        </div>
      </div>
    </better>
    <router-view></router-view>
  </div>
</template>

<script>
import serach from "@/assets/images/home/search.png";
import serach_act from "@/assets/images/search/search.png";
import better from "@/components/better.vue";
export default {
  name: "homeSearch",
  props: {},
  data() {
    return {
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
  created() {},
  mounted() {},
  watch: {},
  methods: {
    link() {
      console.log(3);
    }
  },
  components: {
    better
  }
};
</script>

<style scoped lang="scss">
.search {
  height: 100%;
}
.header {
  width: calc(100% - 40px);
  margin: 0 auto;
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
  margin-top: 19px;
  & .refer {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    align-items: center;
    & img {
      display: block;
      width: 24px;
      height: 24px;
    }
    & h4 {
      margin-left: 4px;
      font-size: 16px;
      color: #dfdfdf;
    }
  }
  & .refer_main {
    display: flex;
    flex-wrap: wrap;
    & .refer_item {
      margin-top: 24px;
      text-align: left;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(223, 223, 223, 1);
      line-height: 16px;
      width: 50%;
    }
    & .refer_more {
      margin-top: 24px;
      text-align: left;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(241, 163, 99, 1);
      line-height: 16px;
    }
  }
}
</style>
