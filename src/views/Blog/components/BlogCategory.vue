<template>
  <div class="blog-category-container" v-loading="loading">
    <h2>文章分类</h2>
    <Diractory :list="list" @select="handleSelect"/>
  </div>
</template>
<script>
import fatchData from "@/mixins/fatchData";
import Diractory from "./Diractory";
import { getBlogType } from "@/api/blog";
export default {
  name: "BlogCategory",
  components: { Diractory },
  mixins: [fatchData([])],
  data() {
    return {};
  },
  computed: {
    categoryId(){
      return this.$route.params.id || -1
    },  
    list() {
      const totalArticleCount = this.datas.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      let list = [
        {
          id: -1,
          articleCount: totalArticleCount,
          name: "全部",

        },
        ...this.datas,
      ];
      return list.map((e) => ({ ...e, isSelect: this.categoryId===e.id }));
    },
  },
  methods: {
    handleSelect(item){
      const query ={
            limit: 10,
            page: 1
          }
      // 判断ID为-1则跳转全部
      if(item.id===-1){
        this.$router.push({
          name: 'Blog',
          query
        })
      }else{
        this.$router.push({
          name: 'BlogCategory',
          params: {id:item.id},
          query
        })
      }
    },
    fatchData() {
      return getBlogType();
    },
  },
};
</script>
<style scoped lang="less">
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
