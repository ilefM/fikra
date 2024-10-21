import { IPost } from "./IPost";

export interface IUser {
  id: string;
  username: string;
  email: string;
  posts: IPost[];
  bio: string;
  role: Role;
}

enum Role {
  USER,
  ADMIN,
}
