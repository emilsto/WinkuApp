//page to display the thread of a post with all the replies

import React, { useEffect, useState } from "react";

import axios from "../api/axios";
import PostFrame from "../components/Posts/PostFrame";
import PostBox from "../components/Posts/PostBox";
import Comment from "../components/Posts/Comment";
import useAuth from "../hooks/useAuth";


const PageThread = (props) => {
    const { auth } = useAuth();
  // Get the username and post ID from the URL
  const { username, postId } = props.match.params;

  // Use the useState hook to store the post content
  const [post, setPost] = useState(null);

  const addData = (addData) => {
    console.log("addData: ", addData);
  };

  // Use the useEffect hook to fetch the post content from the server
  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Make a GET request to the server to fetch the post
        const response = await axios.get(`/api/posts/${username}/${postId}`);
        // Update the state with the fetched post
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [username, postId]);

  // Render the post content if it has been fetched, or a loading message otherwise
  return (
    <div>
      {post ? (
        <>
          <PostFrame post={post} showUtilityBar={false} />
          <Comment comments={post.comments} />
        </>
      ) : (
        "Loading post..."
      )}
        {auth.isLogged ? <PostBox user={auth.user} addData={addData} /> : null}
    </div>
  );
};

export default PageThread;
