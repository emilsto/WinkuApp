//component to handle posting to the database
import React, { useState } from "react";


const PostBox = ({ user, addData }) => {
  //set up state for the post
  const [post, setPost] = useState({
    content: "",
  });

  const postToDatabase = async (e) => {
    //grab the token from local storage
    console.log(post)
      //add the post to the database
      addData(post);
      //clear the post box
      setPost({
        content: "",
      });
  };
  //text counter for the post

  const [count, setCount] = useState(140);
  const handleCount = (e) => {
    setCount(140 - e.target.value.length);
  };

  //handle change for the post
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postToDatabase();
  };

  return (
    <div className="border-x border-y border-slate-300 p-4 w-full bg-white">
      <div className="flex flex-row py-2">
        <img className="rounded-full w-16 h-16" src={user.image} alt=""></img>
        <textarea
          className="text-m text-gray-900 bg-white-200 resize-none w-full h-fit p-2 rounded-lg ml-2"
          name="content"
          id="content"
          value={post.content}
          onChange={handleChange}
          onKeyUp={handleCount}
          maxLength="140"
          placeholder="What's on your mind?"
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
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-purple-500 text-neutral-50 font-bold rounded-3xl p-2 text-xl inline-flex items-center p-2 hover:bg-purple-800"
        >
          Wingu!
        </button>
      </div>
    </div>
  );
};

export default PostBox;
