<template>
  <div class="pager-container">
    <a :class="{ disabled: current === 1 }" @click="change(1)">|&lt;&lt;</a>
    <a @click="change(current - 1)">&lt;&lt;</a>
    <a
      :class="{ actived: current === item }"
      v-for="item in pages"
      :key="item"
      @click="change(item)"
      >{{ item }}</a
    >
    <a @click="change(current + 1)">&gt;&gt;</a>
    <a @click="change(totalPage)">&gt;&gt;|</a>
  </div>
</template>

<script>
/* 
解决样式问题
  设置全局样式
  设置全局颜色变量
  首页图标 和 上一页图标 在第一页禁用
  末页图标 和 下一页图标 在最后一页禁用
  a标签默认样式
  a标签激活时的样式
设置需要的props
  total 总数据量
  current 当前页码
  limit 页容量
  visibleNumber 可见页码数
根据总数据量和页容量算出总页数
根据可见页码数和当前页码 算出展示的开始页面和结束页码
返回事件
*/
export default {
  props: {
    total: {
      required: true,
      default: 0,
      type: Number,
    },
    current: {
      required: true,
      default: 1,
      type: Number,
    },
    limit: {
      default: 10,
      type: Number,
    },
    visibleNumber: {
      default: 10,
      type: Number,
    },
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.limit);
    },
    startPage() {
      let start = this.current - Math.floor(this.visibleNumber / 2);
      return start < 1 ? 1 : start;
    },
    endPage() {
      let end = this.startPage + this.visibleNumber - 1;
      return end > this.totalPage ? this.totalPage : end;
    },
    pages() {
      let pages = [];
      let start = this.startPage;
      if (this.endPage - this.startPage <= 9)
        start = this.endPage - this.visibleNumber + 1;
      for (let index = start; index <= this.endPage; index++) {
        pages.push(index);
      }
      return pages;
    },
  },
  methods: {
    change(newPage) {
      this.$emit("changePage", newPage);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@size: 30px;
.pager-container {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
}
a {
  color: @primary;
  cursor: pointer;
  display: inline-block;
  width: @size;
  height: @size;
  line-height: @size;
  // border: 1px solid @primary;
  border-radius: 5px;
  text-align: center;
  user-select: none;
  &.disabled {
    cursor: not-allowed;
    color: rgb(193, 193, 193);
  }
  &.actived {
    color: #333;
  }
}
</style>
