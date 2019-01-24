<template>
  <div>
    <!-- <Xheader name="联系人" skill="js"/> -->
    <Xheader/>
    <!-- <Cbanner></Cbanner> -->
    
  </div>
</template>
<script>
// 引用组件

import Xheader from "../components/Xheader.vue";
// import Cbanner from "../components/Cbanner.vue";

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xheader
    // Cbanner

  },
 data() {
    return {
    };
  },
  methods: {
    // 获取数据的方法
    async getStyleData() {
      let data = await this.$axios.get("http://localhost:3000/style");
      this.styledata = this.styledata.concat(data.data.data);
    },
    cutTitle(index) {
    //   console.log(index);
      this.cur = index;
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getStyleData();
  },
  mounted() {
  }
};
</script>