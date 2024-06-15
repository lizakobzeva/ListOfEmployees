import { PostsShema } from "entities/Post/model/types/PostTypes";
import { UserShema } from "entities/User";
import { LoginShema } from "features/AuthByEmail/model/types/LoginShema";
import { RegisterShema } from "features/AuthByEmail/model/types/RegisterShema";
import { NavigateFunction } from "react-router-dom";

export interface StateShema {
  user: UserShema;
  login: LoginShema;
  register: RegisterShema;
  posts: PostsShema;
}

export interface ThunkExtraArg {
  navigate?: NavigateFunction;
}
