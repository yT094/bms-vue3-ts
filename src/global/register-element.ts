import { App } from "vue";

// import "element-plus/theme-chalk/index.css";
import "element-plus/lib/theme-chalk/base.css";

import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
} from "element-plus";

const components = [ElButton, ElTabs, ElTabPane, ElForm, ElFormItem, ElInput];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
