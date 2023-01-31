import { createApp } from "vue";
import { globalRegister } from "./global";
import App from "./App.vue";

const app = createApp(App);
// 全局注册 element-plus 等
app.use(globalRegister);
app.mount("#app");
