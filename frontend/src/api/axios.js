import axios from "axios";

export default axios.create({
  baseURL: "https://13.49.227.55:4000",
});

export const getPosts = (offset) => {
  return axios.get(`/api/posts/5/${offset}`);
};
