export function debounce(fn, duration) {
  let timer = null;
  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, duration);
  };
}

export function formatDate(time) {
  const date = new Date(+time)
  const y = date.getFullYear()
  const m = (date.getMonth()+1+"").padStart(2,0)
  const d = (date.getDay()+1+"").padStart(2,0)
  
  return `${y}年${m}月${d}日`
}
