import axios from "axios";

export default axios.create({
  baseURL: "https://ec2-13-49-227-55.eu-north-1.compute.amazonaws.com:4000",
  // baseURL: "http://localhost:4000", //development
  // baseURL: "https://13.49.227.55:4000" //production
  // baseURL: "https://ec2-13-49-227-55.eu-north-1.compute.amazonaws.com:4000" //production2

});

export const getPosts = (offset) => {
  return axios.get(`/api/posts/5/${offset}`);
};
