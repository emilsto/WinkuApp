//render the commentbox and the comments

import React from "react";

import CommentFrame from "./CommentFrame";

const Comment = ({ comments }) => {
  return (
    <div className="flex flex-col">
      {/* Check if the comments array is empty before rendering the list of comments */}
      {comments.length > 0
        ? comments.map((comment) => (
            <CommentFrame key={comment.id} comment={comment} />
          ))
        : null}
    </div>
  );
};

export default Comment;
