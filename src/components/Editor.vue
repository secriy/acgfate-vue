<template>
  <div class="tinymce-editor">
    <Editor id="tinymce" v-model="tinymceHtml" :init="init" />
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
import "tinymce/themes/silver/theme.min.js";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/icons/default/icons.js";

export default {
  components: {
    Editor
  },
  data() {
    return {
      //初始化配置
      init: {
        selector: "#tinymce",
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        height: 300,
        plugins: "link lists image code table wordcount",
        toolbar:
          "bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat",
        images_upload_handler: (blobInfo, success, failure) => {
          this.handleImgUpload(blobInfo, success, failure);
        },
        statusbar: true, // 底部的状态栏
        menubar: true, // 最上方的菜单
        branding: false // 水印“Powered by TinyMCE”
      }
    };
  },
  mounted() {
    tinymce.init({});
  }
};
</script>

<style scoped></style>
