<template>
  <Layout>
    <div ref="blogMain" class="blog-main" v-loading="loading">
      <BlogDetail :blog="datas" v-if="datas"/>
      <BlogComment v-if="!loading"/>
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
import BlogComment from "./components/BlogComment.vue"
import fatchData from "@/mixins/fatchData"
import {getBlogDetail} from "@/api/blog"
import scrollTop from '@/mixins/scrollTop'
export default {
  name: "Blog",
  mixins: [fatchData(null),scrollTop('blogMain')],
  components: { Layout, BlogDetail, BlogTOC, BlogComment },
  data() {
    return {};
  },
  mounted(){
    // this.$refs.blogMain.addEventListener('scroll',this.handleMainScroll)
    // this.$bus.$on('setScroll',this.handleSetScroll)
  },
  beforeDestroy(){
    // this.$refs.blogMain.removeEventListener('scroll',this.handleMainScroll)
  },
  methods:{
    fatchData(){
      return getBlogDetail(this.$route.params.id)
    },
    // handleSetScroll(scrollNumber){
    //   this.$refs.blogMain.scrollTop = scrollNumber
    // },
    // handleMainScroll(){
    //   this.$bus.$emit('mainScroll',this.$refs.blogMain)
    // }
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
