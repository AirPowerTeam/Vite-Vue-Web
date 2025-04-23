import { AbstractCurdService } from "@airpower/web";
import { UserEntity } from "./UserEntity";

export class UserService extends AbstractCurdService<UserEntity>{
  entityClass = UserEntity
  baseUrl = "user"
}