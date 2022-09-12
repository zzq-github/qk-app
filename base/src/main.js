import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router";
import { registerMicroApps, start } from "qiankun";

const app = createApp(App)
app.use(ElementPlus);


// 注册子应用
registerMicroApps([
  {
    name: "vueapp1",
    entry: "//localhost:8031",
    container: "#container",
    activeRule: "/mypage1",
  },
  {
    name: "vueapp2",
    entry: "//localhost:8032",
    container: "#container",
    activeRule: "/mypage2",
  },
]);
app.use(router).mount("#app");
start();
