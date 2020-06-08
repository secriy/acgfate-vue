<template>
  <div class="register">
    <NavBar />
    <div class="top-banner">
      <img src="@/assets/images/rl_top.png" class="img-fluid" alt="" />
    </div>
    <div class="title-line"><span class="tit">注册</span></div>
    <br />
    <div class="container">
      <div class="row justify-content-center">
        <form class="col-4">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': usernameValid() }"
              v-model="registerForm.user_name"
              @input="resetValid(), usernameValid"
              placeholder="用户名"
              autocomplete
              id="user_nameForm"
            />
            <div class="invalid-feedback">
              {{ formError.user_name }}
            </div>
          </div>
          <br />
          <div class="form-group">
            <div />
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': nicknameValid() }"
              v-model="registerForm.nickname"
              @input="nicknameValid"
              placeholder="昵称"
              autocomplete
              id="nicknameForm"
            />
            <div class="invalid-feedback">
              {{ formError.nickname }}
            </div>
          </div>
          <br />
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              :class="{ 'is-invalid': passwordValid() }"
              v-model="registerForm.password"
              @input="passwordValid"
              placeholder="密码"
              autocomplete
              id="passwordForm"
            />
            <div class="invalid-feedback">
              {{ formError.password }}
            </div>
          </div>
          <br />
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              :class="{ 'is-invalid': confirmValid() }"
              v-model="registerForm.password_confirm"
              @input="confirmValid"
              placeholder="确认密码"
              autocomplete
              id="password_confirmForm"
            />
            <div class="invalid-feedback">
              {{ formError.password_confirm }}
            </div>
            <br />
            <div
              class="alert alert-success"
              role="alert"
              v-if="isRegister === 0"
            >
              注册成功！UID：{{ uid }}
            </div>
            <div
              class="alert alert-danger"
              role="alert"
              v-else-if="isRegister === 1"
            >
              注册失败，{{ err }}。
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
      formError: {
        user_name: "",
        nickname: "",
        password: "",
        password_confirm: ""
      },
      isRegister: 2,
      isExist: false,
      uid: "",
      err: ""
    };
  },
  methods: {
    usernameValid() {
      if (this.registerForm.user_name.length == 0) {
        this.formError.user_name = "用户名不能为空";
        return true;
      } else if (
        this.registerForm.user_name.length < 3 ||
        this.registerForm.user_name.length > 10
      ) {
        this.formError.user_name = "用户名长度必须介于3和10之间";
        return true;
      } else if (this.isExist) {
        this.formError.user_name = "用户名已被注册";
        return true;
      }
      return false;
    },
    nicknameValid() {
      if (this.registerForm.nickname.length == 0) {
        this.formError.nickname = "昵称不能为空";
        return true;
      } else if (
        this.registerForm.nickname.length < 2 ||
        this.registerForm.nickname.length > 10
      ) {
        this.formError.nickname = "昵称长度必须介于2和10之间";
        return true;
      }
      return false;
    },
    passwordValid() {
      if (this.registerForm.password.length == 0) {
        this.formError.password = "密码不能为空";
        return true;
      } else if (
        this.registerForm.password.length < 8 ||
        this.registerForm.password.length > 16
      ) {
        this.formError.password = "密码长度必须介于8和16之间";
        return true;
      }
      return false;
    },
    confirmValid() {
      if (this.registerForm.password_confirm.length == 0) {
        this.formError.password_confirm = "确认密码不能为空";
        return true;
      } else if (
        this.registerForm.password != this.registerForm.password_confirm
      ) {
        this.formError.password_confirm = "两次输入的密码不一致";
        return true;
      }
      return false;
    },
    resetValid() {
      this.isExist = false;
    },
    async onSubmit() {
      API.userRegister(this.registerForm).then(res => {
        if (res.code === 0) {
          this.isRegister = 0;
          this.uid = res.data.uid;
          setTimeout(() => {
            this.loginPage();
          }, 2000);
        } else if (res.code == 40001) {
          this.isExist = true;
        } else {
          this.isRegister = 1;
          this.err = res.msg;
        }
      });
    },
    loginPage() {
      this.$router.push("/login");
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
.invalid-feedback {
  float: left;
}
</style>
