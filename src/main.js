import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import showMessage from "./util/showMessage";
import eventBus from "@/util/eventBus";
import "@/styles/global.less";
import store from "@/store";
import "@/mock";

Vue.config.productionTip = false;
Vue.prototype.$showMessage = showMessage;
Vue.prototype.$bus = eventBus

// 注册自定义指令
import vLoading from "@/directives/loading";
import vLazy from "@/directives/lazy";

Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// todo 测试接口 之后删除
import * as api from '@/api/blog'
// api.getBlogDetail(1).then(res=>{
//   console.log('res',res)
// })

// api.submitComment({
//   nickname: "昵称",
// 	content: "评论内容，纯文本",
// 	blogId: '1'
// }).then(res=>{
//   console.log('res',res)
// })

// api.getComment({
//   page: 1,
// 	limit: 30,
// 	blogId: '1',
// }).then(res=>{
//   console.log('res',res)
// })