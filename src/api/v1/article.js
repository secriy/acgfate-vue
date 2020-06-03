import axios from "axios";

// 获取文章
const getArticle = aid =>
  axios.get(`/api/v1/article/${aid}`).then(res => res.data);
// 获取文章列表
const getArticles = category =>
  axios.get(`/api/v1/articles/${category}`).then(res => res.data);

export { getArticle, getArticles };
