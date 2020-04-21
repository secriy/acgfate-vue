<template>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    style="background-color: #ffb3cb57;"
  >
    <div class="container col-lg-8">
      <a class="navbar-brand" href="#"
        ><img src="../assets/logo.png" alt="" width="160"
      /></a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/"
              >首页<span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">图床</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">音乐</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">关于</router-link>
          </li>
        </ul>
      </div>
      <form class="form-inline col-lg-5 row">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          搜索
        </button>
        <button
          class="btn btn-outline-success offset-lg-4 mr-sm-2"
          @click.prevent="registerPage"
        >
          注册
        </button>
        <button class="btn btn-outline-secondary" @click.prevent="loginPage">
          登录
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    registerPage() {
      this.$router.push("/register");
    },
    loginPage() {
      this.$router.push("/login");
    }
  }
};
</script>
