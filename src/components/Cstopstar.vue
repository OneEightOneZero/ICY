<template>
  <div class="big">
    <div>
      <img src="https://image3.ichuanyi.cn/ai-admin/1139cb58c247ce035c6928a80252d887.jpg">
    </div>
    <a href="https://icy.design/icy/media_list?categoryId=1516184042&appId=4"></a>
    <a href="https://icy.design/icy/media_list?categoryId=1516183636&appId=4"></a>
    <a href="https://icy.design/icy/designer_list?appId=4"></a>
    <a href="https://icy.design/icy/media_list?categoryId=1516183635&appId=4"></a>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.big {
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  a {
    position: absolute;
    display: block;
    &:nth-child(2) {
      top: 50px;
      left: 30px;
      width: 700px;
      height: 230px;
    }
    &:nth-child(3) {
      bottom: 30px;
      left: 30px;
      width: 220px;
      height: 226px;
    }
    &:nth-child(4) {
      bottom: 30px;
      left: 260px;
      width: 230px;
      height: 226px;
    }
    &:nth-child(5) {
      bottom: 30px;
      left: 500px;
      width: 220px;
      height: 226px;
    }
  }
}
</style>
