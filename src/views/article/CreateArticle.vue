<template>
  <div>
    <NavBar />
    <editor ref="editor"> </editor>
  </div>
</template>
<script>
import TinyMce from "@/components/Editor";
import NavBar from "@/components/NavBar";
export default {
  name: "MenuEdit",
  components: {
    editor: TinyMce,
    NavBar
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped></style>
