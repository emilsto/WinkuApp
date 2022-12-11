//Epic posts get epic rewards. Page to hold arcived posts.
import React, { useEffect, useState } from "react";
import Posts from "../components/Posts/Posts";
import PostSkeleton from "../components/Posts/PostSkeleton";
import axios from "../api/axios";

const EPIC_URL = "/api/posts/epic";

const Archive = () => {
  //epic post dummy data
  const [data, setData] = useState([]);
  useEffect(() => {
    const getEpicPosts = async () => {
      try {
        const res = await axios.get(EPIC_URL);
        const data = res.data;
        setData(data);
      } catch (error) {
        console.log("error");
      }
    };
    getEpicPosts();
  }, []);

  return (
    <div className="flex flex-col md:py-8 py-0 ">
      <p className="py-2 md:m-0 m-5">
        This is where all the cool posts go to die. Post epic, get pinned. Epic
        posts deserve EPIC rewards.
      </p>
      {data.length === 0 ? <PostSkeleton /> : <Posts data={data} />}
    </div>
  );
};

export default Archive;
