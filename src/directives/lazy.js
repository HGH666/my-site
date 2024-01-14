import eventBus from '@/util/eventBus'
import defaultImg from '@/assets/default.gif'
import {debounce} from '@/util'

let imgs = []
// 拿到所有的img元素
// 判断每个元素的位置是否在可视区域
// 在可视区域加载，不在设置loing图片样式
function setImg(imgObj){
    let imgRect = imgObj.dom.getBoundingClientRect()
    let imgTop = imgRect.top;
    // 判断当前图片是否在试图内
    // 元素距离顶部的距离小于视口高度 && 元素距离顶部的距离> 负的元素高度
    if(imgTop<document.documentElement.clientHeight&& imgTop > -imgRect.height){
      // 在视口中，需要加载的图片
      imgObj.dom.src = imgObj.src
      imgs = imgs.filter((i) => i !== imgObj);
    }
}

eventBus.$on('mainScroll',debounce(handleMainScroll,300))

function handleMainScroll(){
  console.log('wes')
  for (const img of imgs) {
    setImg(img)
  }
}

export default {
  inserted(el,binding){
    el.src = defaultImg
    const imgObj = {dom:el,src: binding.value}
    imgs.push(imgObj)
    setImg(imgObj)
  },
  unbind(){
    imgs = []
  }
}