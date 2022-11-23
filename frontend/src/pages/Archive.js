//Epic posts get epic rewards. Page to hold arcived posts.
import React, { useEffect, useState } from "react";
import Posts from "../components/Posts/Posts";
import PostSkeleton from "../components/Posts/PostSkeleton";
import axios from "../api/axios";

const Archive = () => {
  //epic post dummy data
  const [data, setData] = useState([]);
  useEffect(() => {

    const getEpicPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/posts/epic`);
        const data = res.data;
        setData(data);
      }
      catch (error) {
        console.log("error");
      }
    }
    getEpicPosts(); 
  }, []);

  return (
    <div className="flex flex-col py-8">
      <p className="py-2">
        This is where all the cool posts go to die. Post epic, get pinned. Epic
        posts deserve EPIC rewards.
      </p>
      {data.length === 0 ? (
        <PostSkeleton />
      ) : (
        <Posts data={data} />
      )}
    </div>
  );
};

export default Archive;
