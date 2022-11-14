//frame for posts, will be used in the Posts component and populated with data from the database

import React from "react";

//handle like and dislike buttons

const PostFrame = ({ post }) => {
    return (
        <div className="flex flex-col">
        <div className="flex flex-wrap border border-slate-400 p-1 my-1">
        <div className="flex flex-row items-center m-5">
        <img className="rounded-full w-12 h-12" src={post.user.avatar} alt=""></img>
            <div className="flex flex-col">
            <p className="">@{post.user.username}</p>
            <p className="text-gray-400">{post.user.bio}</p>
            </div>
            </div>
            <p className="text-lg">{post.body}</p>

            <div className="flex flex-row">
            <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full m-2">
                Like {post.likes}
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full m-2">
                Dislike {post.dislikes}
            </button>
            </div>

        </div>
        </div>
    );
}

export default PostFrame;