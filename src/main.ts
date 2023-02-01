import { createApp } from "vue";
import { globalRegister } from "./global";
import App from "./App.vue";

import jnRequst from "@/network";
jnRequst.request({
  url: "/home/multidata",
  method: "GET",
});

const app = createApp(App);
// 全局注册 element-plus 等
app.use(globalRegister);
app.mount("#app");
