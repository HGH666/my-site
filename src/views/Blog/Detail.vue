<template>
  <Layout>
    <div class="blog-main" v-loading="loading">
      <BlogDetail :blog="datas" v-if="datas"/>
    </div>
    <template slot="right"  >
      <div class="blogTOC" v-loading="loading">
        <BlogTOC :list="datas.toc" v-if="datas" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import fatchData from "@/mixins/fatchData"
import {getBlogDetail} from "@/api/blog"
export default {
  name: "Blog",
  mixins: [fatchData(null)],
  components: { Layout, BlogDetail,BlogTOC },
  data() {
    return {};
  },
  methods:{
    fatchData(){
      return getBlogDetail(this.$route.params.id)
    }
  }
};
</script>

<style lang="less" scoped>

.blog-main{
  overflow-y: auto;
  height: 100%;
  padding: 20px 100px;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.blogTOC{
  width: 300px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
