<template>
  <div>
    <!-- <Xheader name="联系人" skill="js"/> -->
    <!-- <Xheader/>
    <Cbanner></Cbanner>
    <Ctopstar></Ctopstar>
    <Ctopstar></Ctopstar>-->
    <div class="top">
      <div class="fl">
        <p>新品入荷</p>
        <span></span>
      </div>
      <div class="fr">
        <p>查看更多<i></i></p>
      </div>
    </div>
    <div class="runs"></div>
    <br>
    <br>
    <br>
    <br>
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
.top {
  padding: 24px 20px 30px 20px;
  overflow: hidden;
  .fl {
    p {
      color: #333;
      font-size: 38px;
      font-weight: 700;
    }
    span {
      display: block;
      background: #ffaf90;
      height: 4px;
      margin-top: 28px;
      width: 36px;
    }
  }
  .fr {
    color: #999;
    font-size: 28px;
    line-height: 26px;
    margin-top: 10px;
    padding-right: 20px;
    p{
      position: relative;
      i{
        position: absolute;
        right:-40px;
        top:5px;
        display: block;
        width: 10px;
        // height: 10px;
        border:10px solid #fff;
        border-left:12px solid #333;
        
      }
    }
  }
}
</style>
