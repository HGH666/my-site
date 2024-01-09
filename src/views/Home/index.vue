<template>
  <div
    class="home-container"
    @mousewheel="handleMouseWheel"
    v-loading="loading"
  >
    <ul class="banner" :style="{ transform: `translateY(-${current}00%)` }">
      <li v-for="item in datas" :key="item.id">
        <Carouselitem :carousel="item" />
      </li>
    </ul>
    <span
      v-show="current != 0"
      class="icon-up"
      @click="changeBanner(current - 1)"
      ><Icon type="arrowUp"
    /></span>
    <span
      v-show="current != datas.length - 1"
      class="icon-down"
      @click="changeBanner(current + 1)"
      ><Icon type="arrowDown"
    /></span>
    <ul class="indicator">
      <li
        v-for="(item, index) in datas"
        :key="index"
        :class="{ active: current === index }"
        @click="changeBanner(index)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getbanners } from "@/api/home";
import Carouselitem from "./Carouselitem";
import Icon from "@/components/Icon";
import fatchData from "@/mixins/fatchData";
function debounce(fn, duration) {
  let timer = null;
  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, duration);
  };
}
export default {
  name: "Home",
  mixins: [fatchData([])],
  components: { Carouselitem, Icon },
  data() {
    return {
      current: 0,
      loading: true,
    };
  },
  methods: {
    changeBanner(index) {
      const max = this.datas.length - 1;
      if (index < 0) return (this.current = max);
      if (index > this.datas.length - 1) return (this.current = 0);
      this.current = index;
    },
    // 监听鼠标滚轮
    handleMouseWheel: debounce(function (event) {
      // 处理鼠标滚轮事件的逻辑
      // console.log("鼠标滚动了");
      if (event.deltaY > 0) {
        // 向上滚动
        // console.log("向上滚动");
        this.changeBanner(this.current + 1);
      } else {
        // 向下滚动
        this.changeBanner(this.current - 1);
        // console.log("向下滚动");
      }
    }, 200),
    fatchData() {
      return getbanners();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.home-container {
  position: relative;
  width: 100%;
  height: 100%;
}
@ifz: 30px;
@igap: 30px;
.icon-up {
  position: absolute;
  left: 50%;
  top: @igap;
  animation: jump-up 2s 1s infinite;
  color: #fff;

  transform: translateX(-50%);
  cursor: pointer;
  .icon-container {
    font-size: @ifz;
  }
}

.icon-down {
  position: absolute;
  left: 50%;
  color: #fff;
  bottom: @igap;
  transform: translateX(-50%);
  cursor: pointer;
  animation: jump-down 2s infinite;

  .icon-container {
    font-size: @ifz;
  }
}

@jump: 5px;
@keyframes jump-up {
  0% {
    transform: translate(-50%, @jump);
  }
  50% {
    transform: translate(-50%, -@jump);
  }
  100% {
    transform: translate(-50%, @jump);
  }
}
@keyframes jump-down {
  0% {
    transform: translate(-50%, -@jump);
  }
  50% {
    transform: translate(-50%, @jump);
  }
  100% {
    transform: translate(-50%, -@jump);
  }
}

.banner {
  height: 100%;
  width: 100%;
  transition: 1s;
  li {
    height: 100%;
    width: 100%;
    .image-loader-container {
      width: 100%;
      height: 100%;
    }
  }
}

.indicator {
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  li {
    width: 10px;
    height: 10px;
    margin: 7px 0;
    background-color: @dark;
    border-radius: 50%;
    border: 2px solid #fff;
    cursor: pointer;
    &.active {
      background-color: #fff;
      transform: scale(1.2);
    }
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
