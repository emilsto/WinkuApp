//component to handle posting to the database

import React, { useState } from "react";

const PostBox = ( {user}) => {
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
    console.log(post);
    //push the post to the database

    //clear the post box

    setPost({
        content: "",
    });

  };

  //text counter for the post

    const [count, setCount] = useState(140);
    const handleCount = (e) => {
        setCount(140 - e.target.value.length);
        //if count is greater than 140, dont allow the user to type anymore
        if (count > 140) {
            //set the value of the textarea to the value of the textarea minus the last character
            e.target.value = e.target.value.substring(140, e.target.value.length - 1);
        }

    }

    //when user scrolls down, load more posts (25 at a time)

    const [scroll, setScroll] = useState(0);

    const handleScroll = (e) => {
        setScroll(e.target.scrollTop);
        console.log(scroll);
    }

  return (
    <div className="flex flex-wrap w-full border border-slate-400 p-2 my-2">
      <div className="w-full h-120">
        <div className="flex flex-row">
            <img
            className="rounded-full w-12 h-12"
            src={user.avatar}
            alt=""
            ></img>
            <div className="flex flex-col">
            <p>@{user.username}</p>
            <p className="text-gray-400">{user.bio}</p>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div class="pt-6 text-center space-y-4">
          <textarea className="text-m text-gray-900 bg-white-200 border-0 resize-none w-full" 
            name="content"
            id="content"
            value={post.content}
            onChange={handleChange}
            onKeyUp={handleCount}
            placeholder="What's on your mind?"
          ></textarea>
          <div className="flex flex-row justify-between">
            <p className="text-xs">Concise messages are nice. Keep it short! Remaining characters: {count}</p>
            <button type="submit" className="bg-red-500 text-neutral-50 font-bold rounded-full p-2 text-xl inline-flex items-center py-2.5 px-4 focus:ring-4 focus:ring-blue-200  hover:bg-red-800">Wingu!</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default PostBox;
