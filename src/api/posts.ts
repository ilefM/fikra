import axios from "axios";
import { BASE_API_URL } from "../utils/api";
import { IPost } from "../interfaces/IPost";

export async function addNewPost(content: string) {
  if (content != "") {
    const data = {
      content: content,
    };

    const response = await axios.post(`${BASE_API_URL}/posts/`, data);
    return response.data;
  }
  throw new Error("You cannot publish an empty content");
}

export async function updatePost(post: IPost) {
  if (post.content != "") {
    const data = {
      content: post.content,
    };

    const response = await axios.put(`${BASE_API_URL}/posts/${post.id}`, data);
    return response.data;
  }
  throw new Error("You cannot publish an empty content");
}
