<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./index.vue";
export default {
  components: {
    Menu,
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
