import axios from "axios";
import { BASE_API_URL } from "../utils/api";

export async function addNewPost(content: string) {
  if (content != "") {
    const data = {
      content: content,
    };

    const response = await axios.post(`${BASE_API_URL}/posts`, data);
    return response.data;
  }
  throw new Error("You cannot publish an empty content");
}
