import axios, { AxiosPromise } from "axios";
import { BASE_API_URL } from "../utils/api";
import { IPostDetails } from "../interfaces/IPost";

export async function addNewPost(content: string): Promise<IPostDetails> {
  if (content != "") {
    const data = {
      content: content,
    };

    const response = await axios.post(`${BASE_API_URL}/posts/`, data);

    return response.data;
  }

  throw new Error("You cannot publish an empty content");
}

export async function updatePost(post: IPostDetails): AxiosPromise {
  if (post.content != "") {
    const data = {
      content: post.content,
    };

    const response = await axios.put(`${BASE_API_URL}/posts/${post.id}`, data);

    return response;
  }

  throw new Error("You cannot publish an empty content");
}

export async function deletePost(postId: string): AxiosPromise {
  const response = await axios.delete(`${BASE_API_URL}/posts/${postId}`);

  return response;
}
