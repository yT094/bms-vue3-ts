import { createApp } from "vue";
import { globalRegister } from "./global";
import App from "./App.vue";
import "normalize.css";
import "@/assets/css/index.less";

import jnRequst from "@/network";
import type { IDataType } from "@/network/types";

jnRequst
  .request<IDataType>({
    url: "/home/multidata",
    method: "GET",
  })
  .then((res) => {
    console.log(res.data);
    console.log(res.returnCode);
    console.log(res.success);
  })
  .catch((err) => {
    console.log(err);
  });

const app = createApp(App);
// 全局注册 element-plus 等
app.use(globalRegister);
app.mount("#app");
