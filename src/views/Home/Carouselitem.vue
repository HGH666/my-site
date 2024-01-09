<template>
  <div
    class="carouselitem-container"
    ref="outContainer"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseleave"
  >
    <div ref="innerContainer" class="carousel-img" :style="imagePsition">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="showText"
      />
    </div>

    <div class="text-box">
      <h1 class="title" ref="title">{{ carousel.title }}</h1>
      <p class="description" ref="description">{{ carousel.description }}</p>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";

export default {
  name: "Carouselitem",
  props: ["carousel"],
  components: { ImageLoader },
  data() {
    return {
      titleWidth: 0, // 标题宽度
      descriptionWidth: 0, // 描述宽度
      outContainerSize: null, // 外层容器宽高
      innerContainerSize: null, // 内层容器宽高
      mouseX: 0,
      mouseY: 0,
    };
  },
  methods: {
    showText() {
      // 设置初始值为0
      this.$refs.title.style.width = 0;
      this.$refs.title.style.opacity = 1;
      // 强制渲染
      this.$refs.title.clientHeight;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.description.style.width = 0;
      this.$refs.description.style.opacity = 1;
      // 强制渲染
      this.$refs.description.clientHeight;
      this.$refs.description.style.transition = "2s 1s";
      this.$refs.description.style.width = this.descriptionWidth + "px";
    },
    setSize() {
      // 获取容器宽高
      this.outContainerSize = {
        width: this.$refs.outContainer.clientWidth,
        height: this.$refs.outContainer.clientHeight,
      };
      this.innerContainerSize = {
        width: this.$refs.innerContainer.clientWidth,
        height: this.$refs.innerContainer.clientHeight,
      };
    },
    // 鼠标移动
    handleMousemove(e) {
      // 计算出鼠标移动距离
      const ract = this.$refs.outContainer.getBoundingClientRect();
      this.mouseX = e.clientX - ract.left;
      this.mouseY = e.clientY - ract.top;
    },
    // 鼠标离开外部容器
    handleMouseleave() {
      // 重新设置中心点
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
  computed: {
    // 根据鼠标坐标计算出图片偏移量
    imagePsition() {
      if (!this.innerContainerSize || !this.outContainerSize) return;
      // 多出来的距离
      const extraWidth =
        this.innerContainerSize.width - this.outContainerSize.width;
      const extraHeight =
        this.innerContainerSize.height - this.outContainerSize.height;
      // 内部图片需要偏移的距离
      const x = (extraWidth / this.outContainerSize.width) * this.mouseX;
      const y = (extraHeight / this.outContainerSize.height) * this.mouseY;
      return { transform: `translate(${-x}px, ${-y}px)` };
    },
    center() {
      return {
        x: this.outContainerSize.width / 2,
        y: this.outContainerSize.height / 2,
      };
    },
  },
  mounted() {
    // 获取文字宽度
    this.titleWidth = this.$refs.title.clientWidth;
    this.descriptionWidth = this.$refs.description.clientWidth;
    this.setSize();
    window.addEventListener("resize", this.setSize);
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carouselitem-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.2s;
}
.text-box {
  position: absolute;
  left: 80px;
  letter-spacing: 3px;
  bottom: 50px;
  color: #fff;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  top: calc(50% - 40px);

  .title {
    font-weight: 100;
    font-size: 2em;
    overflow: hidden;
    opacity: 0;
  }
  .description {
    margin-top: 20px;
    font-size: 1.2em;
    color: lighten(@gray, 20%);
    overflow: hidden;
    opacity: 0;
  }
}
</style>
