import { AirEntity, Field, Table } from "@airpower/web"

export class UserEntity extends AirEntity {
  @Table()
  @Field({
    label: "邮箱"
  })
  email!: string

  @Table({
    label:"密码"
  })
  password!: string

  @Field({
    label:"昵称"
  })
  @Table()
  nickname!: string
}
