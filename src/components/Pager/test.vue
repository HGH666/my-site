<template>
  <Pager
    :current="current"
    :limit="10"
    :total="200"
    :visibleNumber="11"
    @changePage="changePage"
  />
</template>

<script>
import Pager from "./index.vue";
export default {
  components: { Pager },
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    changePage(newPage) {
      this.current = newPage;
    },
  },
};
</script>

<style></style>
