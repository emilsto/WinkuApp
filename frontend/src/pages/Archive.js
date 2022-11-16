//Epic posts get epic rewards. Page to hold arcived posts.
import React, { useEffect, useState } from "react";
import PostSkeleton from "../components/Posts/PostSkeleton";
import PostFrame from "../components/Posts/PostFrame";

const Archive = () => {
  //epic post dummy data
  const epicPost = {
    _id: "1",
    body: "This post is EPIC! It must have been really cool to read, but now it is archived. Too bad!",
    likes: 9001,
    dislikes: 0,
    user: {
      _id: "1",
      username: "emilTheDev",
      bio: "Ganster of Love",
      image: "https://avatars.githubusercontent.com/u/54960869?v=4",
    },
    createdAt: "2021-06-01T20:00:00.000Z",
    updatedAt: "2021-06-01T20:00:00.000Z",
    __v: 0,
  };

  //fetch fresh data from the API
  const [data, setData] = useState([]);
  useEffect(() => {
    //set data to dummy data for now
    setData([epicPost]);
  }, []);

  //map over the data and display it

  return (
    <div className="flex flex-col m-5">
      <h1 className="text-4xl font-bold">Archive</h1>
      <p>
        This is where all the cool posts go to die. Post epic, get pinned. Epic
        posts deserve EPIC rewards.
      </p>
      {data.length === 0 ? (
        <PostSkeleton />
      ) : (
        <div className="flex flex-wrap justify-center">
          {data.map((post) => (
            <PostFrame key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Archive;
