<template>
  <div>

    <div class="top">
      <div class="fl">
        <p v-text="name.title">新品入荷</p>
        <span></span>
      </div>
      <div class="fr" v-if="name.ismore">
        <p>查看更多<i></i></p>
      </div>
    </div>
    
  </div>
</template>



<script>


export default {
  // 获取父组件传过来的属性值，让子组件呈现对应的状态
  props:['name'],
  data() {
    return {
        
    };
  },
  methods: {
    
  },
  computed: {},
  watch: {},
  created() {},
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
