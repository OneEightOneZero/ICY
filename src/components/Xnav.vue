<template>
  <div class="Xnav">
    <div class="nav">
      <span :class="{xian:show_new}" @click="show__new">最新</span>
      <span :class="{xian:show_blogger}" @click="show__blogger">时尚博主</span>
      <span :class="{xian:show_start}" @click="show__start">明星</span>
    </div>
    <div class="content">
      <div class="content_left fl">
      <div class="fl content1" v-for="(item,index) in arr1" :key="index">
        <!-- https://image3.ichuanyi.cn -->
        <img class="img1" :src="'https://image3.ichuanyi.cn/'+item.image.image">
        <img class="img2" :src="'https://image3.ichuanyi.cn/'+item.avatar" v-show="item.avatar">
        <div class="box">
          <p class="username">{{item.username}}</p>
          <p class="introduce" v-show="item.introduce">{{item.introduce}}</p>
          <p class="zan">
            <span>{{item.collectCount}}</span>
            <img class="heart" src="../assets/images/heart.png">
          </p>
        </div>
      </div>
    </div>
    <div class="content_right fr">
      <div class="fl content1" v-for="(item,index) in arr2" :key="index">
        <!-- https://image3.ichuanyi.cn -->
        <img class="img1" :src="'https://image3.ichuanyi.cn/'+item.image.image">
        <img class="img2" :src="'https://image3.ichuanyi.cn/'+item.avatar" v-show="item.avatar">
        <div class="box" v-show="item.avatar">
          <p class="username">{{item.username}}</p>
          <p class="introduce" v-show="item.introduce">{{item.introduce}}</p>
          <p class="zan">
            <span>{{item.collectCount}}</span>
            <img class="heart" src="../assets/images/heart.png" v-show="item.avatar">
          </p>
        </div>
      </div>
    </div>
  </div>
    </div>
    
</template>
    

<script>
export default {
  data() {
    return {
      show_new: true,
      show_blogger: true,
      show_start: true,
      arr: [],
      arr1:[],
      arr2:[]
    };
  },
  methods: {
    show__new() {
      this.show_new = true;
      this.show_blogger = false;
      this.show_start = false;
      this.arr = [],
      this.arr1 = [],
      this.arr2 = []
      this.reqData("new");
    },
    show__blogger() {
      this.show_new = false;
      this.show_blogger = true;
      this.show_start = false;
      this.arr = [],
      this.arr1 = [],
      this.arr2 = []
      this.reqData("blogger");
    },
    show__start() {
      this.show_new = false;
      this.show_blogger = false;
      this.show_start = true;
      this.arr = [],
      this.arr1 = [],
      this.arr2 = [],
      this.reqData("start");
    },
    //请求数据
    async reqData(str) {
      let data = await this.axios.get(`${this.host}/${str}`);
      this.arr = this.arr.concat(data.data.data.list);
      this.arr1 = this.arr.filter(function(item,idx){
          return idx%2==0
      })
      this.arr2 = this.arr.filter(function(item,idx){
          return idx%2!=0
      })
    }
  },
  created(){
    this.reqData("new")
  }
};
</script>
<style lang="scss" scope>
 .Xnav{
  z-index:-1;
}
.nav {
  position: fixed;
  z-index:100;
  top:100px;
  left:0;
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
.content_left .img1,.content_right .img1 {
  width: 345px;
  height: 517px;
}
.content_left .img2,.content_right .img2  {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: absolute;
  bottom:80px;
  left:30px;
}
.content1 {
  position: relative;
  display: inline-block;
  width: 345px;
  margin:10px;
}
.content_left .heart ,.content_right .heart {
  width: 30px;
  height: 24px;
  display: inline-block;
}
.username,.introduce {
  color: #999;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 6px;
  margin-right: 20px;
  margin-top: 5px;
  margin-left:120px;
}
.username{
  color:#333;
}
.zan{
  position: relative;
  margin-top:10px;
   margin-left:250px;
    span{
      display: inline-block;
      margin-right: 10px;
      font-size:14px;
      color:#999;
    }
}
.box{
  height: 120px;
  p{
    height: 30px;
  }
}
.content_right :nth-child(1) .box{
    // display: none;
}
.content_right :nth-child(1) .img1{
      height: 400px;
    }
.content_left,.content_right{
  margin:0 3px 0 7px;
  width: 365px;
}
.content{
  background:#999;
}
</style>