//frame for posts, will be used in the Posts component and populated with data from the database

import React from "react";

//handle like and dislike buttons

const PostFrame = ({ post }) => {
  //format the date
  const date = new Date(post.createdAt);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formattedDate = date.toLocaleDateString("fi-FI", options);

  return (
    <div key={post.id} className="flex flex-col w-full">
      <div className="border border-slate-300 shadow rounded-md p-4 max-w-m m-2 w-full">
        <div className="flex flex-row items-center m-5">
          <img
            className="rounded-full w-12 h-12"
            src={post.user.image}
            alt=""
          ></img>
          <div className="flex flex-col mx-1">
            <p className="">@{post.user.username}</p>
            <p className="text-gray-400">{post.user.bio}</p>
          </div>
        </div>
        <div className="flex flex-col mx-5 w-full">
          <p className="text-lg">{post.content}</p>
          <p className="pt-2">{formattedDate}</p>
        </div>
        <div className="flex flex-row">
          <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-xl m-2">
            Cool {post.likes}
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-xl m-2">
            Not cool {post.dislikes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostFrame;
