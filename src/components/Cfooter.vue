<template>
  <div class="cy-tabar clearfix">
    <!---->
    <div class="cy-tabar-item fl cy-selected">
      <span data-v-1a1d6634>STYLE</span>
      <p class="cy-curr-icon"></p>
    </div>
    <div class="cy-tabar-item fl">
      <span data-v-1a1d6634>ICON</span>
      <p class="cy-curr-icon"></p>
    </div>
    <div class="cy-tabar-item fl">
      <span data-v-1a1d6634>SHOP</span>
      <p class="cy-curr-icon"></p>
    </div>
    <div class="cy-tabar-item fl">
      <span data-v-1a1d6634>ME</span>
      <p class="cy-curr-icon"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "icy"
    };
  },
  methods: {
    // 获取数据的方法
    async getNews() {
      let data = await this.$axios.get("http://localhost:3000/news");
      this.news = this.news.concat(data);
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.cy-tabar {
  position: fixed;
  bottom: 0;
  width: 750px;
  height: 74px;
  padding: 13px 0;
  line-height: 74px;
  background-color: #fff;
  color: #000;
  font-size: 32px;
  z-index: 200;
}
.cy-tabar:before {
  content: "";
  position: absolute;
  top: -10px;
  width: 750px;
  height: 10px;
  background: url("../assets/shadow.png") repeat-x;
}
.cy-tabar-item {
  width: 25%;
  height: 74px;
  text-align: center;
  cursor: pointer;
  position: relative;
  color: #aaaaaa;
}

.cy-tabar-item:first-child {
  border-left: none;
}

.cy-selected {
  color: #000000;
}
.cy-selected  .cy-curr-icon {
    position: absolute;
    left: 42%;
    top: 64px;
    width: 30px;
    height: 6px;
    background: #000;
  }
</style>


