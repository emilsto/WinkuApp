//frame for posts, will be used in the Posts component and populated with data from the database

import React from "react";
import icon_admin from "../../assets/admin-icon.svg";
import Utilitybar from "./Utilitybar";
import { Link } from "react-router-dom";

//handle like and dislike buttons

const PostFrame = ({ post }) => {
  const [isAdmin, setIsAdmin] = React.useState(false);
  const adminCheck = () => {
    console.log("post", post.user.isAdmin);
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
    <div key={post.id} className="flex-col max-w-full">
      <div className="border-t border-x border-slate-300 rounded-none p-4 max-w-full w-full min-w-full hover:bg-slate-50">
        <div className="flex flex-row items-center m-5">
          <img
            className="rounded-full w-12 h-12 hover:opacity-75"
            src={post.user.image}
            alt=""
          ></img>
          <div className="flex flex-col mx-1">
            <div className="flex flex-row">
              <p className="hover:underline"><Link to={`/${post.user.username}`}>@{post.user.username}</Link></p>
              {isAdmin ? (
                <div className="flex flex-row">
                  {" "}
                  <img
                    className="w-4 h-4 m-1"
                    src={icon_admin}
                    alt="purple checkmark"
                  ></img>{" "}
                </div>
              ) : null}
            </div>
            <p className="text-gray-400">{post.user.bio}</p>
          </div>
        </div>
        <div className="max-w-220 mx-12">
          <div className="flex flex-col w-full">
            <p className="text-lg">{post.content}</p>
            <p className="pt-2">{formattedDate}</p>
            <Utilitybar post={post} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFrame;
