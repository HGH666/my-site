import loadimg from "@/assets/loading.svg";
import style from "./loading.module.less";

export default function (el, binding) {
  // 寻找之前是否已经插入过loading
  const findLoading = el.querySelector('div[data-role="loading"]');
  // console.log(findLoading, binding.value);
  if (binding.value) {
    if (!findLoading) {
      // 创建loading元素
      const mask = document.createElement("div");
      mask.className = style.mask;
      const img = document.createElement("img");
      img.src = loadimg;
      img.className = style.loading;
      mask.setAttribute("data-role", "loading");
      mask.append(img);
      el.append(mask);
    }
  } else {
    findLoading && findLoading.remove();
  }
}
