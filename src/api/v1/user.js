import axios from "axios";

// 用户注册
const userRegister = registerForm =>
  axios
    .post("/api/v1/user/register", registerForm)
    .then(res => res.data)
    .catch(error => {
      console.log(error.response);
    });
// 用户登录
const userLogin = loginForm =>
  axios
    .post("/api/v1/user/login", loginForm)
    .then(res => res.data)
    .catch(error => {
      console.log(error.response);
    });
// 当前用户
const userMe = loginForm =>
  axios.get("/api/v1/user/me", loginForm).then(res => res.data);
// 用户登出
const userLogout = loginForm =>
  axios.delete("/api/v1/user/logout", loginForm).then(res => res.data);
export { userRegister, userLogin, userMe, userLogout };
