<template>
  <div id="icystyle">
    <!-- <Xheader name="联系人" skill="js"/> -->
    <Xheader/>
    <Cbanner></Cbanner>
    <Cstopstar></Cstopstar>
    
    <!-- 新品入荷 -->
    <Cstitle :name="titles[0]"></Cstitle>
    <Cschuchuan :dataxp="styledata[1].list"></Cschuchuan>
    <!--  必买清单 -->
    <Cstitle :name="titles[1]"></Cstitle>
    <Cschuchuan :dataxp="styledata[2].list[0].goods"></Cschuchuan>
    <!-- 搭配指南 -->
    <Cstitle :name="titles[2]"></Cstitle>
    <Cschuchuan :dataxp="styledata[7].list[0].goods"></Cschuchuan>
    <!-- 本周新内容 -->
    <Cstitle :name="titles[3]"></Cstitle>
    <Cschuchuan :dataxp="styledata[7].list[1].goods"></Cschuchuan>
    <!-- 时尚风向标 -->
    <Cstitle :name="titles[4]"></Cstitle>
    <Cschuchuan :dataxp="styledata[7].list[2].goods"></Cschuchuan>
    <!-- 合作设计师 -->
    <Cstitle :name="titles[5]"></Cstitle>
    <Csdesigner :dataxp="styledata[9].list[0]"></Csdesigner>
    <Csdesigner :dataxp="styledata[9].list[1]"></Csdesigner>
    <Csdesigner :dataxp="styledata[9].list[2]"></Csdesigner>
    <Csdesigner :dataxp="styledata[9].list[3]"></Csdesigner>
    <Csdesigner :dataxp="styledata[9].list[4]"></Csdesigner>
    <!-- I.Magazine -->
    <Cstitle :name="titles[6]"></Cstitle>
    <Cschuchuan :dataxp="styledata[8].list[0].goods"></Cschuchuan>
    <!-- 品牌咨询 -->
    <Cstitle :name="titles[7]"></Cstitle>
    <Cschuchuan :dataxp="styledata[8].list[1].goods"></Cschuchuan>

  </div>
</template>
<script>
// 引用组件

import Xheader from "../components/Xheader.vue";
import Cbanner from "../components/Cbanner.vue";
import Cstopstar from "../components/Cstopstar.vue";
import Cstitle from "../components/Cstitle.vue";
import Cschuchuan from "../components/Cschuchuan.vue";
import Csdesigner from "../components/Csdesigner";

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xheader,
    Cbanner,
    Cstopstar,
    Cstitle,
    Cschuchuan,
    Csdesigner

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

        ],
        styledata:[]
    };
  },
  methods: {
    // 获取后端数据的方法
    async getStyleData() {
      let data = await this.$axios.get("http://localhost:3000/style");
      this.styledata = this.styledata.concat(data.data.data.data.list);
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
<style lang="scss" scoped>
#icystyle{
  padding-bottom: 100px;
}
</style>
