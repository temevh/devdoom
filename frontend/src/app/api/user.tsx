import { User } from "../types";
import axios from "axios";

export function GetUser() {
  return axios.get<User>("http://localhost:5000/user");
}
