//utility bar for each post, containing the like, dislike and comment buttons
import { useState } from "react";
import { Link } from "react-router-dom";


import {FaRegCommentAlt, FaRegHeart} from "react-icons/fa";

import axios from "../../api/axios";

const Utilitybar = ({ post }) => {
  //state for the like button
  const [likes, setLikes] = useState(post.likes);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleLike = async () => {
    try {
      axios.put(`/api/posts/like/${post.id}`);
      setError(null); // clear the error message
      setIsError(false); // clear the isError flag
      setLikes((currentLikes) => {
        return currentLikes + 1;
      });
    } catch (error) {
      console.log(error);
      setError(
        "Something went wrong while trying to like the post. Please try again later."
      );
      setIsError(true); // set the isError flag
      return;
    }
  };

  return (
      <div className="flex flex-row my-2 w-4xl">
        <button
          className="bg-purple-500 w-20 hover:bg-purple-700 opacity-75 text-white py-1 px-2 rounded-l-xl active:animate-wiggle"
          onClick={handleLike}
        >
          <FaRegHeart className="inline"/> {likes}
        </button>
        <Link             to={`/${post.user.username}/${post.id}`}
        >
        <button className="bg-blue-500 w-20 hover:bg-blue-700 opacity-75 text-white py-1 px-2 rounded-r-xl active:animate-wiggle">


            <FaRegCommentAlt className="inline"/> {post.comments === undefined ? 0 : post.comments.length}

          
        </button>
        </Link>
      </div>
  );
};

export default Utilitybar;
