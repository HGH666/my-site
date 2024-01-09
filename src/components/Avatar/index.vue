<template>
  <img
    :src="src"
    :alt="alt"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: String,
    size: {
      default: 150,
      type: Number,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
img {
  border-radius: 50%;
}
</style>
