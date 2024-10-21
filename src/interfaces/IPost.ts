export interface IPost {
  id: string;
  authorUsername: string;
  content: string;
}

export interface IPostDetails extends IPost {
  createdAt: Date;
  updatedAt: Date;
}
