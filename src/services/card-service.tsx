import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function findByUserName(username: any) {
  return axios.get(`https://api.github.com/users/${username}`);
}
