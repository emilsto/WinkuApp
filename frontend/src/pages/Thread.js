//page to display the thread of a post with all the replies

import React, { useEffect, useState } from "react";

import axios from "../api/axios";
import PostFrame from "../components/Posts/PostFrame";
import PostBox from "../components/Posts/PostBox";
import Comment from "../components/Posts/Comment";
import useAuth from "../hooks/useAuth";

const POST_URL = "api/comment/create";

const PageThread = (props) => {
  const { auth } = useAuth();
  // Get the username and post ID from the URL
  const { username, postId } = props.match.params;

  const handleCommentAdded = (newComment) => {
    // Update the post object with the new comment
    setPost({
      ...post,
      comments: [...post.comments, newComment],
    });
  };

  // Use the useState hook to store the post content
  const [post, setPost] = useState(null);

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

  const addData = async (addData) => {
    try {
      //add postId to the data
      addData.postId = postId;
      console.log("addData: ", addData);

      const token = localStorage.getItem("token");
      const response = await axios.post(POST_URL, JSON.stringify(addData), {
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      const newComment = response.data;
      handleCommentAdded(newComment);
      console.log(response.data);
      //add the data to the bottom of the page
      //Send signal to the Comment component to update the state
    } catch (error) {
      console.log(error);
    }
  };

  // Render the post content if it has been fetched, or a loading message otherwise
  return (
    <div>
      {post ? (
        <>
          <PostFrame post={post} showUtilityBar={false} />
          <Comment
            comments={post.comments}
            handleNewComment={handleCommentAdded}
          />
        </>
      ) : (
        "Loading post..."
      )}
      {auth.isLogged ? (
        <PostBox
          user={auth.user}
          addData={addData}
          onCommentAdded={handleCommentAdded}
        />
      ) : null}
    </div>
  );
};

export default PageThread;
