<template>
  <div class="test-container">
    <Icon class="item" :type="item" v-for="item in types" :key="item" />
  </div>
</template>

<script>
import Icon from "./index";
import { types } from "./";
export default {
  data() {
    return {
      types,
    };
  },
  components: { Icon },
};
</script>

<style scoped>
.test-container {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 580px;
  flex-wrap: wrap;
}
.item {
  margin: 1em;
  text-align: center;
}
.icon-container {
  display: block;
}
</style>
