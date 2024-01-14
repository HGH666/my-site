<template>
  <div class="blog-comment-container" >
    <MessageArea title="评论列表" :subTitle="`(${datas.total})`" :list="datas.rows" :listLoading="loading" @handleSubmit="handleSubmit"/>
    <div class="loading" v-loading="loading"></div>
  </div>
</template>

<script>
import fatchData from "@/mixins/fatchData"
import MessageArea from "@/components/MessageArea"
import {getComment,submitComment} from "@/api/blog"
export default {
  name:'BlogComment',
  mixins: [fatchData({total: 0,rows:[]})],
  components:{
    MessageArea
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  mounted(){
    this.$bus.$on('scroll',this.handleMainScroll)
  },
  methods:{
    handleMainScroll(dom){
      // console.dir(dom)
      if(!dom) return
      // 设置一个触发底部的阈值
      const flag = 100
      // 计算差值
      const dec = Math.abs(dom.scrollHeight-(dom.scrollTop + dom.clientHeight))
      if(dec<=100) {
        this.loadMore()
      }
    },
    fatchData(){
      return getComment(this.$route.params.id, this.page, this.limit)
    },
    async handleSubmit(formData,callback){
      const data = {
        blogId: this.$route.params.id,
        ...formData
      }
      const result = await submitComment(data)
      this.datas.total++
      this.datas.rows.unshift(result)
      callback()
    },
    // 加载更多
    async loadMore(){
      if(this.datas.rows.length>=this.datas.total) return
      this.page++
      this.loading = true
      const res = await this.fatchData()
      this.loading = false
      this.datas.rows = [...this.datas.rows,...res.rows]
    }
  }
}
</script>

<style lang="less" scoped>
.loading{
  height: 100px;
  position: relative;
}
</style>