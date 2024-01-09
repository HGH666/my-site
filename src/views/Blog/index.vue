<template>
  <div class="Blog-container">
    <Layout>
      <BlogList />
      <template slot="right">
        <BlogCategory />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";
export default {
  name: "Blog",
  components: { BlogList, Layout, BlogCategory },
  data() {
    return {};
  },
};
</script>

<style lang="less"></style>
