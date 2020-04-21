<template>
  <div class="login">
    <NavBar />
    <h1>登录</h1>
    <div class="container">
      <form>
        <div class="form-group">
          <label for="user_name">用户名</label>
          <input
            type="text"
            class="form-control"
            v-model="loginForm.user_name"
            id="user_nameForm"
          />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input
            type="password"
            class="form-control"
            v-model="loginForm.password"
            id="passwordForm"
          />
        </div>
      </form>
      <button type="submit" class="btn btn-primary" @click="onSubmit">
        登录
      </button>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import * as API from "@/api/v1/user/";

export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      loginForm: {
        user_name: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      API.userLogin(this.loginForm).then(res => {
        alert(`登录成功，UID：${res.data.uid}`);
      });
    }
  }
};
</script>
