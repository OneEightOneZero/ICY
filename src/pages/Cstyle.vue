<template>
  <div>
    <!-- <Xheader name="联系人" skill="js"/> -->
    <Xheader/>
    <Xiconnav/>
    <Cfooter></Cfooter>
    
  </div>
</template>
<script>
// 引用组件

import Xheader from "../components/Xheader.vue";
import Xiconnav from "../components/Xiconnav.vue";
import Cfooter from "../components/Cfooter.vue";

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xheader,
    Xiconnav,
    Cfooter

  },
 data() {
    return {
    
      styledata: [],
      op:[{
          data0:{
              list0:[{
                  hasMargin:111,
                    isShowTitle:222,
                    isShowTopLine:333
              }]
          },
          mehoda0:2,
          msg0:3,
          project0:"icyDesign",
          result:0
      }]
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