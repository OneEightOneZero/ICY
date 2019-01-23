<template>
  <dir>
    <div class="nav">
      <span :class="{xian:show_new}" @click="show__new">最新</span>
      <span :class="{xian:show_blogger}" @click="show__blogger">时尚博主</span>
      <span :class="{xian:show_start}" @click="show__start">明星</span>
    </div>
    <div class="content">
      <div v-for="(item,index) in arr">
        <img src="" alt=""/>
        <img src="" alt=""/>
        <a>
          <p></p>
          <p></p>
          <p>
            <span></span>
            <span></span>
          </p>
        </a>
      </div>
    </div>
  </dir>
</template>
    

<script>
export default {
  data() {
    return {
      show_new: false,
      show_blogger: true,
      show_start: false,
      arr: []
    };
  },
  methods: {
    show__new() {
      this.show_new = true;
      this.show_blogger = false;
      this.show_start = false;
      
      this.axios.get(`${this.host}/new`).then(function(response) {
          
      });
    },
    show__blogger() {
      this.show_new = false;
      this.show_blogger = true;
      this.show_start = false;
    },
    show__start() {
      this.show_new = false;
      this.show_blogger = false;
      this.show_start = true;
    }
  }
};
</script>
<style lang="scss" scope>
.nav {
  height: 94px;
  span {
    display: inline-block;
    margin: 0 50px;
    width: 100px;
    height: 93px;
    line-height: 93px;
    font-size: 25px;
    text-align: center;
    color: #ccc;
    background: #fff;
  }
  .xian {
    border-bottom: 2px solid #000;
    color: #000;
    font-weight: bold;
  }
}
</style>