//component to display fresh 50 posts from the database
import React, { useEffect, useState } from "react";

import PostSkeleton from "./PostSkeleton";
import PostFrame from "./PostFrame";


const Posts = ({data}) => {

  //reverse the data so that the newest posts are at the top

  return (
    <div className="flex flex-col">
      {data.length === 0 ? (
        <div className="flex flex-col items-center">
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />

        </div>
      ) : (
        <div className="flex flex-col-reverse">
          {data.map((post) => (
            <PostFrame key={post.id} post={post}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
