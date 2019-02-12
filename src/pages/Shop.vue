<template>
  <div>
    <Xheader/>
    <Corderby/>
  </div>
</template>
<script>
// 引用组件

import Xheader from "../components/Xheader.vue";
import Corderby from "../components/Corderby.vue";

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xheader,
    Corderby
  },
  data() {
    return {
      styledata: []
      
    };
  },
  methods: {
    // 获取后端数据的方法
    // async getShopData() {
    //   let data = await this.$axios.get("http://localhost:3000/shop");
    //   this.shopdata = this.shopdata.concat(data.data.data.data);
    // },
    cutTitle(index) {
      //   console.log(index);
      this.cur = index;
    }
  },
  computed: {},
  watch: {},
  created() {
    // this.getShopData();
  },
  mounted() {}
};
</script>