export interface User {
  user(user: any): string;
  id: string;
  name: string;
  likedUsers: Array<string>;
}
export interface UserShema {
  user?: User;
  accessToken?: string;
}
