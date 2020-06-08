<template>
  <div class="login">
    <NavBar />
    <div class="top-banner">
      <img src="@/assets/images/rl_top.png" class="img-fluid" alt="" />
    </div>
    <div class="title-line"><span class="tit">资料</span></div>
    <br />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="alert alert-primary">UID：{{ profile.uid }}</div>
          <div class="alert alert-primary">用户名：{{ profile.user_name }}</div>
          <div class="alert alert-primary">昵称：{{ profile.nickname }}</div>
          <div class="alert alert-primary">账号状态：{{ profile.status }}</div>
          <div class="alert alert-primary">头像：{{ profile.avatar }}</div>
          <div class="alert alert-primary">
            注册时间：{{ timestampToTime(profile.created_at) }}
          </div>
        </div>
      </div>
      <div class="row justify-content-around">
        <button
          type="submit"
          class="btn btn-primary col-2"
          @click="logOut"
          style="background-color:#DD3735;border:none"
        >
          注销
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import * as API from "@/api/v1/user.js";

export default {
  name: "Profile",
  components: {
    NavBar
  },
  data() {
    return {
      profile: {
        uid: null,
        user_name: "",
        nickname: "",
        status: "",
        avatar: "",
        created_at: null
      }
    };
  },
  methods: {
    registerPage() {
      this.$router.push("/register");
    },
    logOut() {
      API.userLogout().then(() => {
        this.$router.push("/login");
      });
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      var h = date.getHours() + ":";
      var m = date.getMinutes() + ":";
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    }
  },
  beforeCreate() {
    if (this.profile.uid == null) {
      this.$router.push("/login");
    }
  },
  created() {
    API.userMe().then(res => {
      this.profile.uid = res.data.uid;
      this.profile.user_name = res.data.user_name;
      this.profile.nickname = res.data.nickname;
      this.profile.status = res.data.status;
      this.profile.avatar = res.data.avatar;
      this.profile.created_at = res.data.created_at;
    });
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
