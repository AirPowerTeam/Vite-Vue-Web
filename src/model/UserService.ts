import { AbstractWebService } from "@airpower/web";
import { UserEntity } from "./UserEntity";

export class UserService extends AbstractWebService<UserEntity> {
  entityClass = UserEntity;
  baseUrl = "user";

  async login(user: UserEntity): Promise<string> {
    const res = await this.api("login").post(user);
    return res.toString();
  }
}
