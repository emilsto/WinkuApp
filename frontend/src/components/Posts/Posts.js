//component to display fresh 50 posts from the database
import React, { useEffect, useState } from "react";

import PostBox from "./PostBox";
import PostSkeleton from "./PostSkeleton";
import PostFrame from "./PostFrame";
import Searchbar from "../Common/Searchbar";

//dummy data for logged in user
const user = {
  _id: "1",
  username: "emilTheDev",
  bio: "I need a job",
  avatar: "https://avatars.githubusercontent.com/u/61960869?v=4",
};

const Posts = ({data}) => {
  return (
    <div className="flex flex-col">
      {data.length === 0 ? (
        <PostSkeleton />
      ) : (
        <div className="flex flex-wrap">
          {data.map((post) => (
            <PostFrame key={post.id} post={post}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
