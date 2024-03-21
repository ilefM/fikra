import { AxiosResponse } from "axios";
import { IPostDetails } from "../interfaces/IPost";
import { axiosInstance } from "./axios";

export async function getPosts() {
  const response = await axiosInstance.get("/posts");

  return response;
}

export async function getPost(id: string) {
  const response = await axiosInstance.get(`/posts/${id}`);

  return response;
}

export async function addNewPost(
  content: string
): Promise<AxiosResponse<IPostDetails>> {
  if (content != "") {
    const data = {
      content: content,
    };

    const response = await axiosInstance.post(`/posts/`, data);

    return response;
  }

  throw new Error("You cannot publish an empty content");
}

export async function updatePost(
  post: IPostDetails
): Promise<AxiosResponse<IPostDetails>> {
  if (post.content != "") {
    const data = {
      content: post.content,
    };

    const response = await axiosInstance.put(`/posts/${post.id}`, data);

    return response;
  }

  throw new Error("You cannot publish an empty content");
}

export async function deletePost(postId: string): Promise<number> {
  const response = await axiosInstance.delete(`/posts/${postId}`);

  return response.status;
}
