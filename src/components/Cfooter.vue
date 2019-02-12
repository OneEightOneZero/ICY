<template>
  <div class="cy-tabar clearfix">
    <!---->
    <!-- <div @click="changeCut(index)" v-for="(n,index) in titles" :key="index" class="cy-tabar-item fl" :class="{'cy-selected': index==cur}">
      <span v-text="n.title">STYLE</span>
      <p class="cy-curr-icon"></p>
    </div> -->
    <!-- <router-link :to="n.jump" tag="div" @click="changeCut(index)" v-for="(n,index) in titles" :key="index" class="cy-tabar-item fl" :class="{'cy-selected': index==cur}">
      <span v-text="n.title">STYLE</span>
      <p class="cy-curr-icon"></p>
    </router-link> -->
    <!-- <div class="cy-tabar-item fl cy-selected">
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
    </div> -->

    <router-link to="/app/style" class="cy-tabar-item fl">
      <span v-text="style">STYLE</span>
      <p class="cy-curr-icon"></p>
    </router-link>

    <router-link to="/app/icon" class="cy-tabar-item fl">
      <span data-v-1a1d6634>ICON</span>
      <p class="cy-curr-icon"></p>
    </router-link>
    <router-link to="/app/shop" class="cy-tabar-item fl">
      <span data-v-1a1d6634>SHOP</span>
      <p class="cy-curr-icon"></p>
    </router-link>
    <router-link to="/app/me" class="cy-tabar-item fl">
      <span data-v-1a1d6634>ME</span>
      <p class="cy-curr-icon"></p>
    </router-link>

  </div>
</template>

<script>
export default {
  // 获取父组件传过来的属性值，让子组件呈现对应的状态
  data() {
    return {
      style:"STYLE",
      titles: [{
        title:'STYLE',
        jump:'app/style'
      },{
        title:'ICON',
        jump:'app/icon'
      },{
        title:'SHOP',
        jump:'app/shop'
      },{
        title:'ME',
        jump:'app/me'
      }],
      cur: 0
    };
  },
  methods: {
    changeCut(index) {
            // console.log(index)
            this.cur = index;
        },
    onActive(){}
  },
  computed: {},
  watch: {},
  created() {
    // this.changeCut(1)
  },
  mounted() {
  }
};
</script>

<style scoped lang="scss">
.cy-tabar {
  overflow-x:hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
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
  width: 24%;
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


