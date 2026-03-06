import axios from "axios";

export function GetTopics() {
  return axios.get("http://localhost:5000/topic-resource");
}

export function AddTopic(topic: string) {
  console.log("topic", topic)
  return axios.patch("http://localhost:5000/user/topics", { topic });
}

export function RemoveTopic(topic: string) {
  console.log("topic", topic)
  return axios.delete("http://localhost:5000/user/topics", { data: { topic: topic } });
}