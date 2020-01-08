<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    el: String
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.$scroll) {
        this.$scroll = new BScroll(this.$refs.wrapper, {
          click: true
        });
      }
    });
  },
  watch: {
    el(newValue, old) {
      this.roll();
    }
  },
  methods: {
    roll() {
      let el = document.querySelector("#" + this.el);
      this.$scroll.scrollToElement(el, 500, true);
    }
  }
};
</script>

<style  lang="scss" scoped>
.wrapper {
  width: calc(100% - 40px);
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
}
</style>
