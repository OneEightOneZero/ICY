<template>
  <div class id="box">
    <ul>
      <!-- <li v-for="(v,index) in json.list" :key=index>
        <img v-bind:src="v.src" alt>
        <p v-text="v.des"></p>
        <p v-text="`￥${v.price}`">{{v.price}}</p>
      </li> -->
      <li v-for="(v,index) in dataxp" :key=index>
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
  props:['dataxp'],
  data() {
    return {
      // json: {
      //   list: [
      //     {
      //       src: "https://image3.ichuanyi.cn/Files/d7/38/5c/d7385c6fdc7f7d03b30e4fd141f6e39e4ca4fa3f_510826.jpg?imageMogr2/thumbnail/300x/format/webp/interlace/1",
      //       des: "这是第一个描述",
      //       price: 198
      //     },
      //     {
      //       src: "https://image3.ichuanyi.cn/Files/d7/38/5c/d7385c6fdc7f7d03b30e4fd141f6e39e4ca4fa3f_510826.jpg",
      //       des: "这是第二个描述",
      //       price: 198
      //     },
      //     {
      //       src: "https://image3.ichuanyi.cn/Files/d7/38/5c/d7385c6fdc7f7d03b30e4fd141f6e39e4ca4fa3f_510826.jpg",
      //       des: "这是第三个描述",
      //       price: 211
      //     },
      //     {
      //       src: "https://image3.ichuanyi.cn/Files/d7/38/5c/d7385c6fdc7f7d03b30e4fd141f6e39e4ca4fa3f_510826.jpg",
      //       des: "这是第一个描述",
      //       price: 198
      //     },
      //     {
      //       src: "https://image3.ichuanyi.cn/Files/d7/38/5c/d7385c6fdc7f7d03b30e4fd141f6e39e4ca4fa3f_510826.jpg",
      //       des: "这是第二个描述",
      //       price: 112
      //     },
      //     {
      //       src: "https://image3.ichuanyi.cn/Files/d7/38/5c/d7385c6fdc7f7d03b30e4fd141f6e39e4ca4fa3f_510826.jpg",
      //       des: "这是第三个描述",
      //       price: 423
      //     }
      //   ]
      // }
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
  mounted() {}
};
</script>
<style lang="scss" scoped>
#box{
  margin-left:20px;
}
#box ul {
  // display: flex;
  // flex-wrap: wrap;
  // margin-top: 200px;
  display: -webkit-box;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}
/*去掉滚动条*/
#box ul::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
#box li {
  // padding: 3px;
  // list-style: none;
  // margin-right: 15px;
  // border: 1px solid #eee;
  width: 300px;
  height: 466px;
  // border: 1px solid #ccc;
  margin-right: 20px;
}
#box img {
  width: 300px;
  height: 370px;
}
#box p:nth-child(2){
  text-align: center;
      color: #333;
    font-size: 24px;
    margin-top: 18px;
}
#box p:nth-child(3){
  text-align: center;
      color: #333;
    font-size: 24px;
    margin-top: 6px;
}
</style>
