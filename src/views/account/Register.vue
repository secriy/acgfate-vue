<template>
  <div class="register">
    <NavBar />
    <div class="top-banner">
      <img src="@/assets/images/rl_top.png" class="img-fluid" alt="" />
    </div>
    <div class="title-line"><span class="tit">注册</span></div>
    <div class="container">
      <div class="row justify-content-center">
        <form class="col-4">
          <div class="form-group">
            <br />
            <input
              type="text"
              class="form-control"
              v-model="registerForm.user_name"
              placeholder="用户名"
              id="user_nameForm"
            />
          </div>
          <div class="form-group">
            <br />
            <input
              type="text"
              class="form-control"
              v-model="registerForm.nickname"
              placeholder="昵称"
              id="nicknameForm"
            />
          </div>
          <div class="form-group">
            <br />
            <input
              type="password"
              class="form-control"
              v-model="registerForm.password"
              placeholder="密码"
              id="passwordForm"
            />
          </div>
          <div class="form-group">
            <br />
            <input
              type="password"
              class="form-control"
              v-model="registerForm.password_confirm"
              placeholder="确认密码"
              id="password_confirmForm"
            />
            <br />
            <div
              class="alert alert-success"
              role="alert"
              v-if="isRegister === 2"
            >
              注册成功！UID：{{ uid }}
            </div>
            <div
              class="alert alert-danger"
              role="alert"
              v-else-if="isRegister === 1"
            >
              注册失败，请检查输入！
            </div>
          </div>
          <div class="row justify-content-around">
            <button
              type="submit"
              class="btn btn-primary"
              @click="onSubmit"
              style="background-color:#8D553B;border:none"
            >
              注册
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import * as API from "@/api/v1/user.js";

export default {
  name: "Register",
  components: {
    NavBar
  },
  data() {
    return {
      registerForm: {
        user_name: "",
        nickname: "",
        password: "",
        password_confirm: ""
      },
      isRegister: 0,
      uid: ""
    };
  },
  methods: {
    onSubmit() {
      API.userRegister(this.registerForm).then(res => {
        if (res.code === 0) {
          this.isRegister = 2;
          this.uid = res.data.uid;
        } else {
          this.isRegister = 1;
        }
      });
    }
  }
};
</script>
<style scoped>
.top-banner {
  background: #fac8cd;
  height: 86px;
  text-align: center;
  margin-bottom: 20px;
}
.title-line {
  width: 980px;
  height: 28px;
  border-bottom: 1px solid #ddd;
  margin: 0 auto 28px;
  text-align: center;
}
.title-line .tit {
  font-size: 38px;
  height: 56px;
  line-height: 56px;
  margin: 0 auto;
  padding: 0 20px;
  background: #fff;
  text-align: center;
}
</style>
