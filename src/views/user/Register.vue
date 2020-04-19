<template>
  <div class="register">
    <NavBar />
    <h1>注册</h1>
    <div class="container">
      <form>
        <div class="form-group">
          <label for="user_name">用户名</label>
          <input
            type="text"
            class="form-control"
            v-model="form.user_name"
            id="user_nameForm"
          />
        </div>
        <div class="form-group">
          <label for="nickname">昵称</label>
          <input
            type="text"
            class="form-control"
            v-model="form.nickname"
            id="nicknameForm"
          />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input
            type="password"
            class="form-control"
            v-model="form.password"
            id="passwordForm"
          />
        </div>
        <div class="form-group">
          <label for="password_confirm">确认密码</label>
          <input
            type="password"
            class="form-control"
            v-model="form.password_confirm"
            id="password_confirmForm"
          />
        </div>
        <button type="submit" class="btn btn-primary" @click="onSubmit">
          注册
        </button>
      </form>
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
      form: {
        user_name: "",
        nickname: "",
        password: "",
        password_confirm: ""
      }
    };
  },
  methods: {
    onSubmit() {
      API.userRegister(this.form);
    }
  }
};
</script>
