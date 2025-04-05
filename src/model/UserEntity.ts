import { AirEntity, Field, Table } from "@airpower/web";
import { UserGender } from "./UserGender";

export class UserEntity extends AirEntity {
  @Field({
    alias: "nickname",
    label:"昵称"
  })
  @Table()
  name!: string;

  password!: string;

  @Table({
    label:"邮箱"
  })
  email!: string;

  @Field({
    label:"手机"
  })
  @Table()
  phone!: string;

  idCard!: string;

  avatar!: string;

  @Field({
    dictionary: UserGender,
  })
  gender!: number;
}
