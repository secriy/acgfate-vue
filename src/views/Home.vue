<template>
  <div class="home">
    <NavBar />
    <div style="width:1080px; margin:0px auto">
      <Banner :banners="banners" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-3" v-for="(aItem, i) in articles" :key="i">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">标题：{{ aItem.title }}</h5>
              <p class="card-text">作者：{{ aItem.author.nickname }}</p>
              <p class="card-text">简介：{{ aItem.summary }}</p>
              <p class="card-text">内容：{{ aItem.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Banner from "@/components/Banner.vue";
import * as API from "@/api/v1/";

export default {
  name: "Home",
  components: {
    NavBar,
    Banner
  },
  data() {
    return {
      articles: [],
      banners: [
        {
          url: require("@/assets/banner/1.jpg"),
          link: "https://baidu.com"
        },
        {
          url: require("@/assets/banner/2.jpg"),
          link: "https://baidu.com"
        },
        {
          url: require("@/assets/banner/3.png"),
          link: "https://baidu.com"
        }
      ]
    };
  },
  methods: {
    load() {
      API.getArticles(4).then(res => {
        this.articles = res.data;
        console.log(res.data);
      });
    }
  },
  beforeMount() {
    this.load();
  }
};
</script>

<style></style>
