<template>
  <div class="login">
    <NavBar />
    <div class="top-banner">
      <img src="@/assets/images/rl_top.png" class="img-fluid" alt="" />
    </div>
    <div class="title-line"><span class="tit">登录</span></div>
    <div class="container">
      <div class="row justify-content-center">
        <form class="col-4">
          <div class="form-group">
            <br />
            <input
              type="text"
              class="form-control"
              v-model="loginForm.user_name"
              placeholder="用户名"
              autocomplete
              id="user_nameForm"
            />
          </div>
          <div class="form-group">
            <br />
            <input
              type="password"
              class="form-control"
              v-model="loginForm.password"
              placeholder="密码"
              autocomplete
              id="passwordForm"
            />
            <br />
            <div class="alert alert-danger" role="alert" v-if="isLogin === 1">
              用户名或密码错误！
            </div>
            <div
              class="alert alert-success"
              role="alert"
              v-else-if="isLogin === 0"
            >
              登录成功！UID：{{ uid }}
            </div>
          </div>
          <div class="row justify-content-around">
            <button
              type="submit"
              class="btn btn-primary col-2"
              @click="submitForm"
              style="background-color:#E6A441;border:none"
            >
              登录
            </button>
            <button
              type="submit"
              class="btn btn-primary col-2"
              @click="registerPage"
              style="background-color:#DD3735;border:none"
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
  name: "Login",
  components: {
    NavBar
  },
  data() {
    return {
      loginForm: {
        user_name: "",
        password: ""
      },
      isLogin: 2,
      uid: ""
    };
  },
  methods: {
    registerPage() {
      this.$router.push("/register");
    },
    profilePage() {
      this.$router.push("/profile");
    },
    submitForm() {
      API.userLogin(this.loginForm).then(res => {
        if (res.code === 0) {
          this.isLogin = 0;
          this.uid = res.data.uid;
          setTimeout(() => {
            this.profilePage();
          }, 1000);
        } else {
          this.isLogin = 1;
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
