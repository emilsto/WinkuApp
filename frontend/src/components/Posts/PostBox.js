//component to handle posting to the database
import React, { useState } from "react";

const PostBox = ({ user, addData, from }) => {
  //set up state for the post
  const [post, setPost] = useState({
    content: "",
  });

  //handle change for the post
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  //text counter for the post
  const [count, setCount] = useState(140);
  const handleCount = (e) => {
    setCount(140 - e.target.value.length);
    console.log(from);
  };

  const postToDatabase = async () => {
    //check that post is not empty
    if (post.content === "") {
      return;
    } else {
      addData(post);
      //clear the post box
      setPost({
        content: "",
      });
      setCount(140);
    }
  };

  return (
    <div className="border-x border-y border-slate-300 p-4">
      <div className="flex flex-row py-2">
        <img className="rounded-full w-16 h-16" src={user.image} alt=""></img>
        <textarea
          className="text-xs text-gray-900 bg-white-200 resize-none w-full h-fit p-2 rounded-lg ml-2"
          name="content"
          id="content"
          value={post.content}
          onChange={handleChange}
          onKeyDown={handleCount}
          maxLength="140"
          placeholder={from === "home" ? "What's on your mind?" : "Reply... "}
        ></textarea>
      </div>
      <div className="flex flex-row justify-between">
        <p className="text-xs text-black">
          Concise messages are nice. Keep it short! Remaining characters:{" "}
          {count <= 20 ? (
            <span className="text-red-500">{count}</span>
          ) : (
            <span>{count}</span>
          )}
        </p>
        {from === "home" ? (
          <button
            type="submit"
            onClick={postToDatabase}
            className="bg-purple-500 text-neutral-50 font-bold rounded-3xl md:text-xl md:inline-flex items-center p-2 hover:bg-purple-800 active:animate-wiggle"
          >
            Wingu!
          </button>
        ) : (
          <button
            type="submit"
            onClick={postToDatabase}
            className="bg-blue-500 opacity-75 text-neutral-50 font-bold rounded-3xl p-2 md:text-xl inline-flex items-center p-2 hover:bg-blue-800 active:animate-wiggle"
          >
            Comment
          </button>
        )}
      </div>
    </div>
  );
};

export default PostBox;
