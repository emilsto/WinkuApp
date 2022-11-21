//render the commentbox and the comments

import React from "react";
import CommentBox from "./CommentBox";

const Comment = ({ postId, comments, addComment }) => {
  return (
    <div className="flex flex-col">
      <CommentBox postId={postId} addComment={addComment} />
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex flex-row border border-slate-400 rounded-full p-2 m-2"
        >
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="font-bold text-slate-400">{comment.username}</p>
            </div>
            <div className="flex flex-row">
              <p className="text-slate-400">{comment.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
