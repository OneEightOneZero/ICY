<template>
  <div class="header">
    <span class="logo" v-show="logoicy">
      <img src="../assets/images/logo_icy.png" alt="logo">
    </span>
    <span class="search" v-show="search">
      <img src="../assets/images/logo_search.png" alt="search">
      <input type="text" placeholder="连衣裙">
    </span>
    <span class="logo_headset">
      <img src="../assets/images/logo_headset.png" alt="logo_headset">
    </span>
    <span class="logo_shoppingCart">
      <img src="../assets/images/logo_shoppingcart.png" alt="logo-shoppingCart">
    </span>
  </div>
</template>
<script>
export default {
  data(){
    return{
      logoicy:false,
      search:false
    }
  }
};
</script>
<style scope>
.header {
  /* background:red; */
  height: 100px;
  position: relative;
}
.logo_headset {
  position: absolute;
  top: 26px;
  right: 100px;
}
.logo_headset img {
  width: 46px;
  height: 46px;
}
.logo_shoppingCart {
  position: absolute;
  top: 26px;
  right: 30px;
}
.logo_shoppingCart img {
  width: 46px;
  height: 46px;
}
.logo {
  /* background: red; */
  position: absolute;
  padding: 20px 0 0 10px;
}
.logo img {
  width: 70px;
  height: 54px;
}
.search {
  background: #f5f5f5;
  display: inline-block;
  width: 500px;
  height: 60px;
  border-radius: 40px;
  margin: 10px 10px 10px 45px;
  padding: 5px 0 8px 25px;
}
.search input {
  outline: none;
  background: #f5f5f5;
  margin-left: 20px;
  margin-top:8px;
  width: 460px;
  height: 40px;
  font-size:14px;
  line-height:40px;
  color:#999;
  border: 1px solid #f5f5f5;
  position: relative;
}
.search img{
  width: 34px;
  height: 34px;
  position: absolute;
  top:30px;
  left:55px;
}
</style>