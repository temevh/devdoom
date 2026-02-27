import axios from "axios";

export function GetTopics() {
  return axios.get("http://localhost:5000/topic-resource");
}

export function AddTopics(topicsArray: string[]) {
  return axios.patch("http://localhost:5000/user/topics", topicsArray);
}
