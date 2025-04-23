import { WebColor, WebEnum } from "@airpower/web";

export class UserGender extends WebEnum {
  static readonly MALE = new UserGender(1, '男').setColor(WebColor.SUCCESS);
  static readonly FEMALE = new UserGender(0, '女').setColor(WebColor.DANGER);
}