//component to display fresh 50 posts from the database

import React, { useEffect, useState } from "react";

import PostBox from "./PostBox";
import PostSkeleton from "./PostSkeleton";
import PostFrame from "./PostFrame";

//more dummy data for now
const post = {
    _id: "1",
    body: "I freaking love this app! I can post whatever I want and see what other people are posting! I love it!",
    likes: 100,
    dislikes: 3,
    user: {
        _id: "1",
        username: "emilTheDev",
        bio: "I am a full stack developer",
        avatar: "https://avatars.githubusercontent.com/u/61960869?v=4",
    
    },
    createdAt: "2021-06-01T20:00:00.000Z",
    updatedAt: "2021-06-01T20:00:00.000Z",
    __v: 0,

};

//dummy data for logged in user
const user = {
    _id: "1",
    username: "emilTheDev",
    bio: "I need a job",
    avatar: "https://avatars.githubusercontent.com/u/61960869?v=4",
};


const Posts = () => {
  //fetch fresh data from the API
  const [data, setData] = useState([]);
  useEffect(() => {
    //set data to dummy data for now
    setData([post, post, post, post, post, post, post, post, post, post]);
    //if all posts are fetched, send message to user
    
    

  }, []);

  //map over the data and display it

  return (
    <div className="flex flex-col">
                         <PostBox user={user} />
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

export default Posts;
