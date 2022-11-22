//component to handle posting to the database

import React, { useState } from "react";
import axios from "../../api/axios";


const POST_URL = "/api/posts";

const PostBox = ({ user }) => {
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

  //handle submit for the post
  const handleSubmit = (e) => {
    e.preventDefault();
    postToDatabase();
    setPost({
      content: "",
    });
    //refresh the page  
  };  
    

  const postToDatabase = async (e) => {
    //grab the token from local storage
    const token = localStorage.getItem("token");

    const response = await axios.post(POST_URL, JSON.stringify(post), {
      headers: { "Content-Type": "application/json", Authorization: token },
    });
    console.log(response);
    //reload the posts component
  };
  //text counter for the post

  const [count, setCount] = useState(140);
  const handleCount = (e) => {
    setCount(140 - e.target.value.length);
    console.log(count);

    //if messages is over 140 characters, disable the submit button
    // handle this later
  };

  return (
    <div className="border-x border-t border-slate-300 p-4 w-full">
      <div className="w-full h-120">
        <div className="flex flex-row">
          <img
            className="rounded-full w-12 h-12"
            src={user.avatar}
            alt=""
          ></img>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p>@{user.username}</p>
              <div></div>
            </div>
            <p className="text-gray-400">{user.bio}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="pt-6 text-center space-y-4">
            <textarea
              className="text-m text-gray-900 bg-white-200 resize-none w-full"
              name="content"
              id="content"
              value={post.content}
              onChange={handleChange}
              onKeyUp={handleCount}
              maxLength="140"
              placeholder="What's on your mind?"
            ></textarea>
            <div className="flex flex-row justify-between">
              <p className="text-xs">
                Concise messages are nice. Keep it short! Remaining characters:{" "}
                {count <= 20 ? (
                  <span className="text-red-500">{count}</span>
                ) : (
                  <span>{count}</span>
                )}
              </p>
              <button
                type="submit"
                className="bg-purple-500 text-neutral-50 font-bold rounded-full p-2 text-xl inline-flex items-center py-2.5 px-4 focus:ring-4 focus:ring-blue-200  hover:bg-red-800"
              >
                Wingu!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostBox;
