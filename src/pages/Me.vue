<template>
  <div class="">
    <div class="login" v-show="iflogin">
      <header>
        <img src="../assets/images/left.png" alt="返回">
      </header>
        <p class="logo_p">
          <img src="../assets/images/logo_icy1.png" alt="logo">
        </p>
      <div class="form">
        <input type="text" class="text" placeholder="请输入11位手机号" v-model="text" @change="iftrue">
        <input type="text" class="psw" placeholder="请输入验证码" v-model="psw">
        <span class="text_inf">{{text_inf}}</span>
        <span class="psw_inf">{{psw_inf}}</span>
        <p @click="getNum">{{yanzhengma}}</p>
      </div>
      <button @click="login">登录</button>
    </div>
    <div class="" v-show="!iflogin">
      <Xheader/>
    </div>
  </div>
</template>
<script>

// 引用组件

import Xheader from "../components/Xheader.vue";


export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xheader,

  },
  data() {
    return {
      yanzhengma: "获取验证码",
      text:"",
      psw:"",
      text_inf:"",
      psw_inf:"",
      iflogin:true,
    };
  },
  methods: {
    getNum() {
      this.yanzhengma =Number("" +
        (parseInt(Math.random() * 9)+1) +
        parseInt(Math.random() * 10) +
        parseInt(Math.random() * 10) +
        parseInt(Math.random() * 10))
        
    },
    async reqData(str) {
      let data = await this.axios.post(`http://localhost:3001/login/username=${str}`);
      // let data = await this.axios.get(`http://localhost:3001/shop`);
      if(JSON.parse(data).code==1){
        alert("登录成功")
      }
    },
    login(){

      var reg = /^1(3|4|5|7|8)\d{9}$/;
      // console.log(reg.test(this.text))
      if(reg.test(this.text)){
            if(this.psw==this.yanzhengma){
      
              this.reqData(this.text)
              // let data = this.axios.get(`http://localhost:3001/login/username=${this.text}`);
              // console.log(data)
                // reqData()
                // alert("登录成功")
                // this.iflogin=false;
            }else{
              alert("请输入正确的验证码")
            }
      }else{
        alert("请输入正确的手机号")

      }
    },
    iftrue(){}
  }
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
.login {
  background: url("../assets/images/login-bg.jpg") no-repeat;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  height: 100vh;
  position: relative;
  header {
    img {
      width: 50px;
      height: 20px;
      margin: 30px 0 0 30px;
    }
  }
  .logo_p {
    height: 140px;
    position: relative;
    margin-top: 150px;
    img {
      height: 140px;
      width: 107px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .form {
    position: relative;
    width: 80%;
    margin: 100px auto 20px;
    padding: 15px 25px;
    background: #fff;
    text-align: center;
    :nth-child(1) {
      border-bottom: 0.1px solid #999;
    }
    input {
      outline: none;
      margin: 5px 0;
      width: 96%;
      height: 56px;
    }
    p {
      width: 196px;
      height: 56px;
      background: #333;
      position: absolute;
      right: 36px;
      bottom: 20px;
      color: #fff;
      line-height: 56px;
      text-align: center;
    }
  }
  button {
    display: block;
    width: 80%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    background: #333;
    color: #fff;
    margin: 0 auto;
    border: none;
  }
}
</style>