import { AirEntity, Field, Table } from "@airpower/web"

export class UserEntity extends AirEntity {
  @Table()
  @Field({
    label: "邮箱"
  })
  email!: string
  @Table()
  password!: string
  @Table()
  nickname!: string
}
