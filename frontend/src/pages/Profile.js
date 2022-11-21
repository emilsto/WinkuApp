//profile page shows the user's profile information and posts
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../components/Profile/ProfileCard";
import ProfileSkeleton from "../components/Profile/ProfileSkeleton";
import Posts from "../components/Posts/Posts";
import PostSkeleton from "../components/Posts/PostSkeleton";
import axios from "../api/axios";

const Profile = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { username } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/profile/${username}`);
        setData(result.data);
      setLoading(false);
    };
    fetchData();
  }, [username]);



  return (
    <div>
      {loading ?<><ProfileSkeleton /> <PostSkeleton /> </> : <div> <ProfileCard user={data[0].user}/> <Posts data={data} /> </div>}
    </div>
  );
};

export default Profile;
