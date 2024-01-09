import MessageStyle from "./showMessage.module.less";
import Icon from "@/components/Icon";
import getComponentRootDom from "@/util/getComponentRootDom";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
export default function (options = {}) {
  // 传参赋默认值
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  // 创建message容器
  const div = document.createElement("div");
  // 创建图标
  const iconDom = getComponentRootDom(Icon, { type });
  console.log(iconDom);
  div.innerHTML = `<span class="${MessageStyle.icon}">${iconDom.outerHTML}</span> <span>${content}</span>`;
  div.className = `${MessageStyle.message} ${MessageStyle["message-" + type]}`;
  // 判断容器是否设置过定位
  if (getComputedStyle(container).position === "static")
    container.style.position = "relative";
  container.append(div);
  // 强制reflow视图
  div.clientHeight;
  div.style.opacity = 1;
  div.style.transform = "translate(-50%,-50%)";

  // 指定事件关闭消息
  setTimeout(() => {
    div.style.transform = "translate(-50%,-50%)  translateY(-20px)";
    div.style.opacity = 0;
    div.addEventListener(
      "transitionend",
      () => {
        div.remove();
        options.callback && options.callback();
      },
      { once: true }
    );
  }, duration);
}
