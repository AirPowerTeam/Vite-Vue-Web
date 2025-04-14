import App from "./App.vue";
import { createApp } from "vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { UserEntity } from "./model/UserEntity";
import { UserService } from "./model/UserService";
import {I18n, Language, WebAccessTokenUtil} from "@airpower/web";
import { Languages } from "./config/Languages";
import { English } from "./config/English";

Languages.addLanguage(English)
I18n.setCurrentLanguage(Language.ChineseSimplified)

const app = createApp(App);

app.use(ElementPlus);
async function init() {
  if (!WebAccessTokenUtil.getAccessToken()) {
    const user = new UserEntity()
    user.email = 'admin@hamm.cn'
    user.password = "Aa123456"
    const accessToken = await UserService.create().login(user)
    WebAccessTokenUtil.setAccessToken(accessToken)
  }
  app.mount("#app");
}
init();
