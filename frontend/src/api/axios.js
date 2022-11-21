import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000",
});

export const getPosts = (offset) => {
  return axios.get(`/api/posts/5/${offset}`);
};
