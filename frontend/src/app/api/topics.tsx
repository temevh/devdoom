import axios from "axios";

export function GetTopics() {
  return axios.get("http://localhost:5000/topic-resource");
}
