<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Xheader></Xheader>
    <Xnav></Xnav>
    <Cfooter></Cfooter>
<<<<<<< HEAD
    <Xiconnav/>
    <Cstyle></Cstyle>
=======
   
>>>>>>> 6952f4ff6d64ed38a8201f0441ff24d6aacd2631
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Xheader from './components/Xheader.vue'
import Cfooter from './components/Cfooter'
<<<<<<< HEAD

import Xiconnav from "./components/Xiconnav.vue";
import Cstyle from "./pages/Cstyle.vue";
=======
import Xnav from "./components/Xnav.vue";

>>>>>>> 6952f4ff6d64ed38a8201f0441ff24d6aacd2631

export default {
  name: "app",
  components: {
   
    // Xheaderstyle,
    Xheader,
    Cfooter,
<<<<<<< HEAD
    Xiconnav,
    Cstyle
=======
    Xnav,
>>>>>>> 6952f4ff6d64ed38a8201f0441ff24d6aacd2631
    // Xheadershop
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
