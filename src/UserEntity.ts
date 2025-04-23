import { DesensitizeType, Field, Form, RootEntity, Table } from "@airpower/web";
import { UserGender } from "./UserGender";

export class UserEntity extends RootEntity {
  @Table({
  })
  @Field({
    label: "昵称"
  })
  @Form({
    requiredString: true
  })
  nickname!: string

  @Table({
    desensitize: DesensitizeType.EMAIL
  })
  @Field({
    label: "邮箱"
  })
  @Form({
    email: true
  })
  email!: string

  @Table({
    desensitize: DesensitizeType.MOBILE
  })
  @Field({
    label: "手机"
  })
  @Form({
    mobilePhone: true
  })
  phone!: string

  @Table({
    color: true,
    width: 80
  })
  @Field({
    label: "性别",
    dictionary: UserGender
  })
  @Form({
    requiredNumber: true,
    defaultValue: UserGender.MALE.key
  })
  gender!: number
}