<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <Diractory :list="newList" @select="select"/>
  </div>
</template>

<script>
import Diractory from "./Diractory";
import { debounce } from '@/util'
export default {
  props:['list'],
  data() {
    return {
      selectAnchor: '',
      blogMainDom: null,
      doms: []
    };
  },
  components: { Diractory },
  watch:{
    blogMainDom(){
      let doms = []
      if(this.blogMainDom) {
        const addDoms = (arr)=>{
          arr.forEach(item => {
            let resDOM = this.blogMainDom.querySelector(`#${item.anchor}`)
            if(resDOM) doms.push(resDOM)
            if(item.children&&item.children.length) addDoms(item.children)
          });
        }
        addDoms(this.list)
      }
      this.doms = doms
    }
  },
  computed: {
    newList(){
      return this.formateList(this.list)
    },

  },
  mounted(){
    this.$bus.$on('mainScroll', (blogMainDom)=>{
      this.blogMainDom = blogMainDom
      debounce(this.setSelect)()
    })
    const saveHash = location.hash 
    location.hash = ''
    setTimeout(() => {
      location.hash = saveHash
    }, 500);
  },
  methods: {
    select(e){
      location.hash = e.anchor;
    },
    setSelect(){
      const range = 200;
      this.selectAnchor = ''
      for (const dom of this.doms) {
        // 看一下当前这个dom元素是不是应该被选中
        if (!dom) {
          continue;
        }
        // 获取这个元素的位置信息
        const domRect = dom.getBoundingClientRect()

        // 位置在想要的位置
        if(domRect.top>=0&&domRect.top<=range){
          this.selectAnchor = dom.id
          return
        }
        // 位置在指定位置以下
        else if(domRect.top>range){
          return
        }
        // 位置在指定位置以上
        else if(domRect.top<0){
          this.selectAnchor = dom.id
        }
      }
    },
    formateList(list){
      return list.map(e=>{
        return {
          ...e,
          isSelect:e.anchor===this.selectAnchor,
          children: e.children?this.formateList(e.children):[]
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
// @import "~@/styles/global.less";
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
