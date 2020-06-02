import axios from "axios";

const userRegister = registerForm =>
  axios.post("/api/v1/user/register", registerForm).then(res => res.data);

const userLogin = loginForm =>
  axios.post("/api/v1/user/login", loginForm).then(res => res.data);

const getArticle = aid =>
  axios.get(`/api/v1/article/${aid}`).then(res => res.data);

const getArticles = category =>
  axios.get(`/api/v1/articles/${category}`).then(res => res.data);

export { userRegister, userLogin, getArticle, getArticles };
