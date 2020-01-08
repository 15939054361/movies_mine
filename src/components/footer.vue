<template>
  <div class="footer">
    <div class="footer_c">
      <router-link tag="div" class="home" to="/home" excat></router-link>
      <router-link tag="div" class="movie" to="/movie"></router-link>
      <router-link tag="div" class="ticket" to="/ticket"></router-link>
      <router-link tag="div" class="cinema" to="/cinema"></router-link>
      <router-link tag="div" class="mine" to="/mine"></router-link>
    </div>
    <div class="Indicator"></div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss" scoped>
.footer {
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 99px;
  background: transparent url("~@/assets/images/icon/footer_bg.png") no-repeat
    center/100% 100%;
}
.footer_c {
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 27px auto 0;
}
.home,
.movie,
.cinema,
.mine {
  width: 41px;
  height: 41px;
}
.movie {
  background: url("~@/assets/images/icon/movie.png") no-repeat center/100% 100%;
}
.home {
  background: url("~@/assets/images/icon/home.png") no-repeat center/100% 100%;
}
.ticket {
  width: 72px;
  height: 72px;
  margin-top: -15px;
  background: url("~@/assets/images/icon/ticket.png") no-repeat center/100% 100%;
}
.cinema {
  background: url("~@/assets/images/icon/cinema.png") no-repeat center/100% 100%;
}
.mine {
  background: url("~@/assets/images/icon/mine.png") no-repeat center/100% 100%;
}
.Indicator {
  width: 134px;
  height: 5px;
  background: rgba(255, 255, 255, 1);
  border-radius: 100px;
  margin: 0 auto;
}
.router-link-exact-active.home {
  background: url("~@/assets/images/icon/home_act.png") no-repeat center/100%
    100%;
}
.router-link-exact-active.movie {
  background: url("~@/assets/images/icon/movie_act.png") no-repeat center/100%
    100%;
}
.router-link-exact-active.cinema {
  background: url("~@/assets/images/icon/cinema_act.png") no-repeat center/100%
    100%;
}
.router-link-exact-active.mine {
  background: url("~@/assets/images/icon/mine_act.png") no-repeat center/100%
    100%;
}
</style>
