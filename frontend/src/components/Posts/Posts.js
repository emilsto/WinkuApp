//component to display fresh 50 posts from the database
import React from "react";
import PostFrame from "./PostFrame";

const Posts = ({ data }) => {
  //reverse the data so that the newest posts are at the top

  return (
    <div className="flex flex-col">
      {data.map((data) => (
        <PostFrame key={data.id} post={data} />
      ))}
    </div>
  );
};

export default Posts;
