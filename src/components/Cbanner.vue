<template>
  <p>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in items" :key="item.id">
        <a :href="item.href" rel="external nofollow">
          <img :src="item.url" class="img">
          <!-- <span class="desc"></span> -->
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </p>
</template>
<script>
 import {Swipe, SwipeItem} from 'mint-ui'
 import 'mint-ui/lib/style.css'
export default {
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem
  },
  data() {
    return {
      items: [
        {
          title: "你的名字",
          href: "http://google.com",
          url: "https://image3.ichuanyi.cn/ai-admin/b623fbc85be15b5d66b034b443a99980.jpg?"
        },
        {
          title: "我的名字",
          href: "http://baidu.com",
          url: "https://image3.ichuanyi.cn/ai-admin/f51e78de243b62e3e16cebb50316b29e.jpg"
        },
        {
          title: "我的名字",
          href: "http://baidu.com",
          url: "https://image3.ichuanyi.cn/ai-admin/cc3b07ba757dbe3abfab70beac60d551.jpg"
        },
        {
          title: "我的名字",
          href: "http://baidu.com",
          url: "https://image3.ichuanyi.cn/ai-admin/ae8b3aa33c3130a83a0b03d7d0558646.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
img {
  width: 100%;
}
.mint-swipe {
  height: 700px;
}
.desc {
  font-weight: 600;
  opacity: 0.9;
  padding: 5px;
  height: 20px;
  line-height: 20px;
  width: 100%;
  color: #fff;
  background-color: gray;
  position: absolute;
  bottom: 0;
}
.mint-swipe-indicator{
  width: 150px;
  height: 150px;
}
</style>