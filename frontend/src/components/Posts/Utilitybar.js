//utility bar for each post, containing the like, dislike and comment buttons
import { useState } from "react";
import axios from "../../api/axios";

const Utilitybar = ({ post }) => {
  //state for the like button
  const [likes, setLikes] = useState(post.likes);
  // set likes to the number of likes the post has

  //handle like button
  const handleLike = async () => {
    //send like to the server
    try {
      axios.put(`/api/posts/like/${post.id}`);
      //reload the page
    } catch (error) {
      console.log(error);
      return;
    }
    setLikes(likes + 1);
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
          Reply {post.dislikes}
        </button>
      </div>
      <div className="py-2"></div>
      {post.likes > 0 ? (
        <div className="flex flex-row">
          <a href="/" className="text-blue-400 text-sm font-bold ">
            Show thread
          </a>{" "}
        </div>
      ) : null}
    </div>
  );
};

export default Utilitybar;
