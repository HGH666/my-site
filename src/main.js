import Vue from "vue";
import App from "./App.vue";
import "@/styles/global.less";
import router from "@/router";
import showMessage from "./util/showMessage";

import "@/mock";

Vue.config.productionTip = false;
Vue.prototype.$showMessage = showMessage;
// 注册自定义指令
import vLoading from "@/directives/loading";
Vue.directive("loading", vLoading);
new Vue({
  router,
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

api.getComment({
  page: 1,
	limit: 30,
	blogId: '1',
}).then(res=>{
  console.log('res',res)
})