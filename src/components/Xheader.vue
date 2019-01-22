<template>
  <div class="header">
    <span class="logo" >
      <img src="../assets/images/logo_icy.png" alt="logo">
    </span>
    <span class="search">
      <input type="text">
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
// console.log(show)
export default {
  
};
</script>
<style scope>
.header {
  /* background:red; */
  height: 50px;
  position: relative;
}
.logo_headset {
  position: absolute;
  top: 13px;
  right: 60px;
}
.logo_headset img {
  width: 23px;
  height: 23px;
}
.logo_shoppingCart {
  position: absolute;
  top: 13px;
  right: 17px;
}
.logo_shoppingCart img {
  width: 23px;
  height: 23px;
}
.logo {
  /* background: red; */
  position: absolute;
  padding: 10px 0 0 10px;
}
.logo img {
  width: 50px;
  height: 27px;
}
.search {
  background: #ccc;
  display: inline-block;
  width: 250px;
  height: 23px;
  border-radius: 20px;
  margin: 5px 10px 10px 10px;
  padding: 5px 0 8px 10px;
}
.search input {
  background: #ccc;
  margin-left: 10px;
  width: 220px;
  height: 20px;
  border: 1px solid transparent;
}
</style>