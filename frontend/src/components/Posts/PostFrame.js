//frame for posts, will be used in the Posts component and populated with data from the database

import React from "react";
import icon_admin from "../../assets/admin-icon.svg";
import Utilitybar from "./Utilitybar";
import { Link } from "react-router-dom";

//handle like and dislike buttons

const PostFrame = ({ post }) => {
  const [isAdmin, setIsAdmin] = React.useState(false);
  const adminCheck = () => {
    if (post.user.isAdmin) {
      setIsAdmin(true);
    }
  };

  React.useEffect(() => {
    adminCheck();
  });

  //format the date
  const date = new Date(post.createdAt);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  
  const formattedDate = date.toLocaleDateString("fi-FI", options);

  return ( 
    <div
      key={post.id}
      className="flex-col border-t border-x border-slate-300 rounded-none p-4 hover:bg-slate-200"
    >
      <div className="flex">
        <img
          className="rounded-full w-12 h-12 hover:opacity-75"
          src={post.user.image}
          alt=""
        ></img>
        <div className=" mx-1">
          <div className="flex flex-row">
            <Link to={`/${post.user.username}`}>
              <p className="hover:underline">@{post.user.username}</p>
            </Link>
            {isAdmin ? (
              <img
                className="w-4 h-4 m-1"
                src={icon_admin}
                alt="purple checkmark"
              ></img>
            ) : null}
          </div>
          <p className="text-gray-400">{post.user.bio}</p>
        </div>
      </div>
      <div className="max-w-220 mx-12">
        <p className="text-lg">{post.content}</p>
        <p className="pt-2">{formattedDate}</p>
        <Utilitybar post={post} />
      </div>
    </div>
  );
};

export default PostFrame;
