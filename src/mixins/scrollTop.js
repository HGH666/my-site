export default function(refKey){
  return {
    mounted(){
      // 监听传入节点的滚动条事件
      this.$refs[refKey].addEventListener('scroll',this.handleMainScroll);
      // 监听设置滚动条事件
      this.$bus.$on('setScroll',this.handleSetScroll)
    },
    beforeDestory(){
      // 移除滚动条监听事件
      this.$refs[refKey].removeEventListener('scroll',this.handleMainScroll)
      this.$bus.$off('setScroll',this.handleSetScroll)
    },
    methods:{
      handleMainScroll(){
        this.$bus.$emit('mainScroll',this.$refs[refKey])
      },
      handleSetScroll(scrollNumber){
        this.$refs[refKey].scrollTop = scrollNumber
      }
    }
  }
}