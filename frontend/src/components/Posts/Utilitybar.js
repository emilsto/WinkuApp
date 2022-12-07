//utility bar for each post, containing the like, dislike and comment buttons
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col my-2 ">
      <div className="flex flex-row">
        <button
          className="bg-purple-500 hover:bg-purple-700 opacity-75 text-white py-1 px-2 rounded-l-xl w-20"
          onClick={handleLike}
        >
          Cool {likes}
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 opacity-75 text-white py-1 px-2 rounded-r-xl w-20">
        <Link
            to={`/${post.user.username}/${post.id}`}
        
          >
            Reply {post.dislikes}
          </Link>
          
        </button>
      </div>
      <div className=""></div>
      {/* display the error message if it is not null */}
      {error ? (
        <div className="text-red-600 font-bold text-sm">{error}</div>
      ) : null}
    </div>
  );
};

export default Utilitybar;
