<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./index.vue";
export default {
  components: {
    Empty,
  },
};
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 500px;
  border: 1px solid;
}
</style>
