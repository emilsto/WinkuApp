//commentbox for entering text and submitting a comment

import React, { useState } from "react";

const CommentBox = ({ postId, addComment }) => {
  //set up state for the comment
  const [comment, setComment] = useState({
    text: "",
  });

  //handle change for the comment
  const handleChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  //handle submit for the comment
  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(postId, comment);
    setComment({
      text: "",
    });
  };

  return (
    <div className="flex flex-row">
      <form onSubmit={handleSubmit}>
        <input
          className="border border-slate-400 rounded-full p-2 m-2"
          type="text"
          name="text"
          value={comment.text}
          onChange={handleChange}
          placeholder="Add a comment"
          maxLength={140}
        ></input>
      </form>
    </div>
  );
};

export default CommentBox;
