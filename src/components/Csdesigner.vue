<template>
  <div class id="desiginer">
    <div>
      <div class="fl">
        <img v-bind:src="'https://image3.ichuanyi.cn/'+dataxp.avatar" alt>
      </div>
      <div class="fr">
        <h4 v-text="dataxp.username"></h4>
        <p v-text="`· ${dataxp.nationality}`"></p>
        <div class="line"></div>
        <p v-text="dataxp.coBranding"></p>
      </div>
    </div>

    <ul>
      <!-- <li v-for="(v,index) in json.list" :key=index>
        <img v-bind:src="v.src" alt>
        <p v-text="v.des"></p>
        <p v-text="`￥${v.price}`">{{v.price}}</p>
      </li>-->
      <li v-for="(v,index) in dataxp.goodsImages" :key="index">
        <img v-bind:src="'https://image3.ichuanyi.cn/'+v.image.image" alt>

        <p v-text="v.name"></p>
        <p v-text="`￥${v.price}`">{{v.price}}</p>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    // Xheader,
    // Cbanner,
    // Ctopstar
  },
  // 获取父组件传过来的属性值，让子组件呈现对应的状态
  props: ["dataxp"],
  data() {
    return {};
  },
  methods: {
    // 获取数据的方法
    async getStyleData() {
      let data = await this.$axios.get("http://localhost:3000/style");
      // this.styledata = this.styledata.concat(data.data.data);
    },
    cutTitle(index) {
      //   console.log(index);
      this.cur = index;
    }
  },
  computed: {},
  watch: {},
  created() {
    // this.getStyleData();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
#desiginer {
  margin-left: 40px;
  padding-bottom:20px;
  div {
    height: 173px;
    .fl {
      width: 140px;
      height: 140px;
      box-shadow: 4px 4px 12px rgba(19, 19, 19, 0.28);
      img {
        width: 140px;
        height: 140px;
      }
    }
    .fr {
      :nth-child(2) {
        text-align-last: left;
      }
      :nth-child(3) {
        background-color: #333;
        height: 6px;
        margin-bottom: 8px;
        margin-top: 18px;
        width: 56px;
      }
      :nth-child(4) {
        color: #333;
        font-size: 28px;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 480px;
      }
    }
  }
}
#desiginer ul {
  // display: flex;
  // flex-wrap: wrap;
  margin-left: 40px;
  padding: 15px;
  border: 2px solid hsla(0, 0%, 96.1%, 0.842);
  display: -webkit-box;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}
/*去掉滚动条*/
#desiginer ul::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
#desiginer li {
  // padding: 3px;
  // list-style: none;
  // margin-right: 15px;
  // border: 1px solid #eee;
  width: 256px;
  height: 436px;
  // border: 1px solid #ccc;
  margin-right: 20px;
}
#desiginer img {
  width: 256px;
  height: 350px;
}
#desiginer p:nth-child(2) {
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-top: 18px;
}
#desiginer p:nth-child(3) {
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-top: 6px;
}
</style>
