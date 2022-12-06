//frame to render the comments

import React from "react";
import { Link } from "react-router-dom";

const CommentFrame = ({ comment }) => {
  const date = new Date(comment.createdAt);
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
    <div
      key={comment.id}
      className="flex-col border-t border-x border-slate-300 rounded-none p-2 hover:bg-slate-200"
    >
      <div className="flex">
        <img
          className="rounded-full w-10 h-10 hover:opacity-75"
          src={comment.user.image}
          alt=""
        ></img>
        <div className=" mx-1">
          <div className="flex flex-row">
            <Link to={`/${comment.user.username}`}>
              <p className="hover:underline">@{comment.user.username} replies:</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-220 mx-12">
        <p className="text-s">{comment.content}</p>
        <p className="text-s pt-2">{formattedDate}</p>
      </div>
    </div>
  );
};

export default CommentFrame;
