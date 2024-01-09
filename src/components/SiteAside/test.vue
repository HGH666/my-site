<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./index.vue";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style lang="less">
@import "~@/styles/global.less";
.test-container {
  width: 300px;
  border: 1px solid;
  margin: 0 auto;
  list-style: none;
}
</style>
