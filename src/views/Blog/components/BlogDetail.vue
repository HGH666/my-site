<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期: {{ formatDate(blog.createDate) }}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <a href="">评论: {{ blog.commentNumber }}</a>
      <a href="">{{ blog.category.name }}</a>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from "@/util";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
export default {
  name:'BlogDetail',
  props: ['blog'],
  data() {
    return {

    };
  },
  components: {  },
  methods: {
    formatDate
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.aside {
  font-size: 12px;
  color: @gray;
  padding-top: 20px;
  span,
  a {
    margin-right: 15px;
  }
}
.markdown-body {
  margin: 2em 0;
}
</style>
