export default function debounce(fn,duration=100){
  let timer = null
  return  function(...arg){
    clearTimeout(timer)
    timer = setTimeout(() => {
      
      fn(arg)
    }, duration);
  }
} 