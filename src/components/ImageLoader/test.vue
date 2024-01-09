<template>
  <div>
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load="load"
    />
  </div>
</template>

<script>
import ImageLoader from "./index.vue";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    load() {
      console.log("我加载好了");
    },
  },
};
</script>

<style></style>
