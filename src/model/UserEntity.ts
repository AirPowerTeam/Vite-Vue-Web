import { AirEntity, Field, Table } from "@airpower/web";
import { UserGender } from "./UserGender";

export class UserEntity extends AirEntity {
  // @Field({}) @Table({}) 都是装饰器
  // 生成用户的属性 包括 昵称 密码 邮箱 手机号 身份证号 头像 性别等字段，并分别标记好装饰器

  // 使用 !断言属性 不要给默认值
  @Field({})
  @Table({})
  nickname!: string;

  @Field({})
  @Table({})
  password!: string;

  @Field({})
  @Table({})
  email!: string;

  @Field({})
  @Table({})
  phone!: string;

  @Field({})
  @Table({})
  idCard!: string;

  @Field({})
  @Table({})
  avatar!: string;

  @Field({
    type: UserGender,
  })
  @Table({})
  gender!: UserGender;
}
