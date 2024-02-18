import axios, { AxiosResponse } from "axios";
import { IPostDetails } from "../interfaces/IPost";
import { getApiUrl } from "../utils/api";

const BASE_API_URL = getApiUrl();

export async function addNewPost(
  content: string
): Promise<AxiosResponse<IPostDetails>> {
  if (content != "") {
    const data = {
      content: content,
    };

    const response = await axios.post(`${BASE_API_URL}/posts/`, data);

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

    const response = await axios.put(`${BASE_API_URL}/posts/${post.id}`, data);

    return response;
  }

  throw new Error("You cannot publish an empty content");
}

export async function deletePost(postId: string): Promise<number> {
  const response = await axios.delete(`${BASE_API_URL}/posts/${postId}`);

  return response.status;
}
