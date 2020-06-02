<template>
  <div
    class="banner-container"
    @mouseenter="stopSwitch"
    @mouseleave="autoSwitch"
  >
    <ul
      class="images"
      :style="{
        width: banners.length * 100 + '%',
        marginLeft: -index * 100 + '%'
      }"
    >
      <li v-for="(item, i) in banners" :key="i">
        <a :href="item.link"><img :src="item.url" alt=""/></a>
      </li>
    </ul>
    <ul class="dots">
      <li
        v-for="(item, i) in banners"
        :key="i"
        :class="{
          active: i === index
        }"
        @click="index = i"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      required: true
    }
  },
  created() {
    this.autoSwitch();
  },
  destroyed() {
    this.stopSwitch();
  },
  data() {
    return {
      index: 0,
      timer: null
    };
  },
  methods: {
    autoSwitch() {
      if (this.timer) {
        return;
      }
      this.timer = setInterval(() => {
        this.index = (this.index + 1) % this.banners.length;
      }, 2000);
    },
    stopSwitch() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style>
.banner-container {
  height: 800px;
  position: relative;
  overflow: hidden;
}
.banner-container li {
  display: block;
  width: 1080px;
  height: 100%;
  float: left;
}
.images {
  height: 100%;
  transition: 0.5s;
}
.banner-container img {
  width: 1080px;
  height: 100%;
}
.dots {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
}
.dots li {
  width: 10px;
  cursor: pointer;
  height: 10px;
  margin: 0 3px;
  border-radius: 50%;
  border: 1px solid;
  color: #fff;
}
.dots li.active {
  background: #fff;
}
</style>
