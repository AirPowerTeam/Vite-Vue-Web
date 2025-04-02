import { AirEnum } from "@airpower/web";

export class UserGender extends AirEnum{
  static MALE = new UserGender(1, '男');
  static FEMALE = new UserGender(2, '女');
}