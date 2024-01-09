<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./index.vue";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less">
@import "~@/styles/global.less";
.test-container {
  width: 200px;
  height: 800px;
  margin: 0 auto;
  border: 1px solid;
  background-color: #000;
}
</style>
