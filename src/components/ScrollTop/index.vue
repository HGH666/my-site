<template>
  <div v-show="show" class="scroll-top-container" @click="handleClick">
    TOP
  </div>
</template>

<script>
export default {
  name:"ScrollTop",
  data(){
    return {
      show: false,
    }
  },
  mounted(){
    this.$bus.$on('mainScroll', this.handleScroll)
    // console.log('this.$store.state',this.$store.state)
  },
  methods:{
    handleScroll(mainDom){
      // 设置一个阈值，超过显示
      const flag = 300
      if(mainDom.scrollTop>300) this.show = true
      else this.show = false
    },
    handleClick(){
      this.$bus.$emit('setScroll',0)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.scroll-top-container{
  position:fixed;
  background: @primary;
  right: 50px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  color: #fff;
  cursor: pointer;
}

</style>