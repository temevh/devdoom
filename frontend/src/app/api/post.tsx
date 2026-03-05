import axios from "axios"

export function GetPosts() {
    return axios.get("http://localhost:5000/post")
}