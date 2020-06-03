<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<style lang="scss">
/* 滚动条 */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track-piece {
  background-color: #fff;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: #12b7f5;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: #12b7f5;
  border-radius: 3px;
}
</style>
