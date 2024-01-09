<template>
  <div class="blog-list-container" ref="container" v-loading="loading">
    <ul class="list" ref="list">
      <li v-for="item in datas.rows" :key="item.id">
        <div class="thumb">
          <RouterLink :to="{name:'BlogDetail',params:{id:item.id}}" v-if="item.thumb">
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink :to="{name:'BlogDetail',params:{id:item.id}}">
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{formatDate(item.createDate)}}</span>
            <span>浏览：{{item.scanNumber}}</span>
            <span>评论：{{item.commentNumber}}</span>
            <RouterLink :to="{name:'BlogCategory',params:{id:item.category.id}}" href="/article/cate/8" class="">{{ item.category.name }}</RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <div class="pager" v-if="datas.total">
      <Pager :total="datas.total" :current="routerInfo.page" @changePage="changePage"/>
    </div>
  </div>
</template>
<script>
import {getBlog} from '@/api/blog';
import fatchData from "@/mixins/fatchData";
import Pager from "@/components/Pager"
import { formatDate } from "@/util";
import { RouterLink } from 'vue-router';
export default {
  name: "BlogList",
  mixins: [fatchData([])],
  data() {
    return {
      
    };
  },
  components: { Pager, RouterLink },

  computed:{
    routerInfo(){
      return {
        page: +this.$route.query.page||1,
        categoryId: this.$route.params.id|| -1,
        limit: +this.$route.query.limit||10,
      }
    }
  },  
  watch:{
    async $route(){
      this.loading = true
      this.$refs.container.scrollTop = 0;
      const res = await this.fatchData()
      this.datas = res
      this.loading = false
    }
  },
  methods: {
    formatDate,
    handleClick(item) {
      this.$emit("select", item);
    },
    fatchData(){
      return getBlog(this.routerInfo)
    },
    changePage(newPage){
      const query = {
        ...this.routerInfo,
        page:newPage
      }
      if(query.categoryId===-1){
        this.$router.push({
          name: 'Blog',
          query,
        })
      }else{
        this.$router.push({
          name: 'BlogCategory',
          params: query.categoryId,
          query,
        })
      }
    }
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
    scroll-behavior: smooth;
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    // max-height: calc(100vh - 100px);

    li {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid @gray;
      &:last-child{
        border-bottom: none;
      }
      .thumb {
        flex: 0 0 auto;
        margin-right: 15px;
        img {
          display: block;
          width: 200px;
          height: 150px;
          object-fit: cover;
          border-radius: 5px;
        }
      }
      .main {
        flex: 1 1 auto;
        h2 {
          margin: 0;
        }
      }
      .aside {
        font-size: 12px;
        color: @gray;
        span {
          margin-right: 15px;
        }
      }
      .desc {
        margin: 15px 0;
        font-size: 14px;
      }
    }
  }
  .pager{
    padding-top: 20px ;
    text-align: center;
  }
}



</style>
