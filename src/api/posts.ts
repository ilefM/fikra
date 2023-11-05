import axios from "axios";
import { BASE_API_URL } from "../utils/api";

export async function addNewPost(content: string) {
  if (content != "") {
    const response = await axios.post(`${BASE_API_URL}/posts`, content);
    return response.data;
  }
  throw new Error("Content must not be empty");
}
