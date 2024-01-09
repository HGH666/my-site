<template>
  <div class="empty-container">
    <Icon type="empty" />
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "Empty",
  props: {
    text: {
      default: "无数据",
      type: String,
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin";
.empty-container {
  .flex-r-center(column);
  .icon-container {
    font-size: 80px;
  }
  .text {
    margin-top: 15px;
  }
}
</style>
