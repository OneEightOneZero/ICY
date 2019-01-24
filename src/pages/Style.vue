<template>
  <div id="icystyle">
    <!-- <Xheader name="联系人" skill="js"/> -->
    <Xheader/>
    <Cbanner></Cbanner>
    <Cstopstar></Cstopstar>
    
    <!-- 新品入荷 -->
    <Cstitle :name="titles[0]"></Cstitle>
    <Csbanner></Csbanner>
    <!--  必买清单 -->
    <Cstitle :name="titles[1]"></Cstitle>
    <!-- 搭配指南 -->
    <Cstitle :name="titles[2]"></Cstitle>
    <!-- 本周新内容 -->
    <Cstitle :name="titles[3]"></Cstitle>
    <!-- 时尚风向标 -->
    <Cstitle :name="titles[4]"></Cstitle>
    <!-- 合作设计师 -->
    <Cstitle :name="titles[5]"></Cstitle>
    <!-- I.Magazine -->
    <Cstitle :name="titles[6]"></Cstitle>
    <!-- 品牌咨询 -->
    <Cstitle :name="titles[7]"></Cstitle>


  </div>
</template>
<script>
// 引用组件

import Xheader from "../components/Xheader.vue";
import Cbanner from "../components/Cbanner.vue";
import Cstopstar from "../components/Cstopstar.vue";
import Cstitle from "../components/Cstitle.vue";
import Csbanner from "../components/Csbanner.vue";

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xheader,
    Cbanner,
    Cstopstar,
    Cstitle,
    Csbanner

  },
 data() {
    return {
       titles:[
            {
                title:"新品入荷",
                ismore:true
            },{
                title:"必买清单",
                ismore:false
            },{
                title:"搭配指南",
                ismore:false
            },{
                title:"本周新内容",
                ismore:false
            },{
                title:"时尚风向标",
                ismore:false
            },{
                title:"合作设计师",
                ismore:true
            },{
                title:"I.Magazine",
                ismore:true
            },{
                title:"品牌咨询",
                ismore:true
            }

        ]
    };
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
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
#icystyle{
  padding-bottom: 100px;
}
</style>
