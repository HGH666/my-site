<template>
  <div class="image-loader-container">
    <img v-if="!alldone" :src="placeholder" class="loader-img" />
    <img
      :style="{ transition: duration + 'ms', opacity: show ? 1 : 0 }"
      ref="img"
      class="photo"
      :src="src"
      @load="handleLoaded"
    />
  </div>
</template>

<script>
/* 
如何设置元素结构，是用遮罩还是直接切换元素
切换元素怎么设置渐变的动画

*/
export default {
  name: "ImageLoader",
  props: {
    src: {
      required: true,
      type: String,
    },
    placeholder: {
      required: true,
      type: String,
    },
    duration: {
      default: 600,
      type: Number,
    },
  },
  data() {
    return {
      show: false,
      alldone: false,
    };
  },
  methods: {
    handleLoaded() {
      this.$emit("load");
      this.show = true;
      setTimeout(() => {
        this.alldone = true;
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .loader-img {
    .pos-center();
    filter: blur(12px);
  }
  .photo {
    .pos-center();
  }
}
</style>
