export interface IPost {
  id: string;
  author: string;
  content: string;
}

export interface IPostDetails extends IPost {
  createdAt: Date;
  updatedAt: Date;
}
