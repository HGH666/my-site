<template>
  <ul class="diractory-container">
    <li v-for="(item, index) in list" :key="index">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">{{
        item.name
      }}</span>
      <span class="aside" :class="{ active: item.isSelect }" @click="handleClick(item)" v-if="item.articleCount">
        {{ item.articleCount }}篇
      </span>
      <Diractory :list="item.children" @select="handleClick(item)" />
    </li>
  </ul>
</template>
<script>
export default {
  name: "Diractory",
  props: ["list"],
  data() {
    return {};
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>
<style lang="less">
@import "~@/styles/var.less";
.diractory-container {
  li {
    min-height: 40px;
    line-height: 40px;
    margin-left: 1em;
    font-size: 14px;
    span {
      cursor: pointer;
      &.active {
        color: @warn;
        font-weight: bold;
      }
    }
    .aside {
      font-size: 12px;
      margin-left: 1em;
      color: @gray;
    }
  }
}
</style>
