//utility bar for each post, containing the like, dislike and comment buttons
import React from "react";

const Utilitybar = ({ post }) => {
  
  return (
    <div className="flex flex-col my-2 ">
      <div className="flex flex-row">
        <button className="bg-green-500 hover:bg-green-700 opacity-75 text-white py-1 px-2 rounded-l-xl">
          Cool {post.likes}
        </button>
        <button className="bg-red-500 hover:bg-red-700 opacity-75 text-white py-1 px-2 rounded-none">
          Not cool {post.dislikes}
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 opacity-75 text-white py-1 px-2 rounded-r-xl">
          Reply {post.dislikes}
        </button>
      </div>
      <div className="py-2"></div>
      {post.likes > 0 ? (
        <div className="flex flex-row">
          <a href="/" className="text-blue-400 text-sm font-bold ">
            Show thread
          </a>{" "}
        </div>
      ) : null}
    </div>
  );
};

export default Utilitybar;
