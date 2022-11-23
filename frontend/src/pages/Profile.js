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
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
    try {
      const result = await axios.get(`/api/profile/${username}`);
        setData(result.data.posts);
        setUser(result.data.user);
        } catch (error) {
            console.log("error");
            setError(true);

        }
        setLoading(false);
    }
    fetchData();
  }, [username]);


  return (
    <div>
      {loading ?<><ProfileSkeleton /> <PostSkeleton /> </> : <div> <ProfileCard user={user}/> <Posts data={data} /> </div>}
      {data.length < 2 && !error ? <div className="py-5 text-center"><p className="text-3xl font-bold">@{username} hasn’t Wikissyt</p>
      <p className="text-gray-400">When they do, their winkus will show up here.</p></div> : null}
      {error ? <div className="py-5 text-center"><p className="text-3xl font-bold">User @{username} not found</p>
        </div> : null}
    </div>
  );
};

export default Profile;
