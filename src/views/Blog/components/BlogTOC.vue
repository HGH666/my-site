<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <Diractory :list="list" @select="select"/>
  </div>
</template>

<script>
import Diractory from "./Diractory";
export default {
  props:['list'],
  data() {
    return {

    };
  },
  components: { Diractory },
  methods: {
    select(e){
      location.hash = e.anchor;
    }
  },
};
</script>

<style lang="less" scoped>
// @import "~@/styles/global.less";
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
