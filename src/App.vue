<template>
  <div id="app">
    
    <router-view></router-view>
    <Cfooter></Cfooter>
   
    
  </div>
</template>

<script>

import Cfooter from './components/Cfooter'


export default {
  name: "app",
  components: {
   
    Cfooter,
  }
};
</script>

<style>

</style>
