<template>
  <div>

    <Xheader/>
    <Xnav/>    

  </div>
</template>
<script>
// 引用组件

import Xheader from "../components/Xheader.vue";
import Xnav from "../components/Xnav.vue";

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xheader,
    Xnav

  },
 data() {
    return {
    }
 }
};
</script>