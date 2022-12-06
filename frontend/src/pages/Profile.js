//profile page shows the user's profile information and posts
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../components/Profile/ProfileCard";
import ProfileSkeleton from "../components/Profile/ProfileSkeleton";
import Posts from "../components/Posts/Posts";
import PostSkeleton from "../components/Posts/PostSkeleton";
import axios from "../api/axios";
import Settings from "../components/Profile/Settings";
import useAuth from "../hooks/useAuth";
import Modal from "../components/Common/Modal";


import { FcSettings } from "react-icons/fc";

const Profile = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { auth } = useAuth();
  const { username } = useParams();

  const handleUserUpdate = async () => {
    try {
      const response = await axios.put(`/api/users/update/${auth.user.id}`, JSON.stringify(data), {
        headers: { "Content-Type": "application/json", Authorization: auth.token },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    console.log("Settings updated");
  };

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
    };
    fetchData();
  }, [username]);

  return (
    <div>
      {loading ? (
        <>
          <ProfileSkeleton /> <PostSkeleton />{" "}
        </>
      ) : (
        <div className="flex flex-col">
        <div className="flex flex-row justify-center items-center py-2">
        <ProfileCard user={user} />
                {auth.token && auth.user.username === username ? (
            <FcSettings size={42} className="cursor-pointer hover:animate-spin" onClick={()=> setShowSettings(!showSettings)}/>
            )
          : null}
           {showSettings ?
           <div className="absolute top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 z-50">
            <Settings user={user} handleUserUpdate={handleUserUpdate} />   </div>: null}
           
        </div>
                  <Posts data={data} />
      </div>
      )}
      {data.length < 1 && !error ? (
        <div className="py-5 text-center">
          <p className="text-3xl font-bold">@{username} hasn’t Wikissyt</p>
          <p className="text-gray-400">
            When they do, their winkus will show up here.
          </p>
        </div>
      ) : null}
      {error ? (
        <div className="py-5 text-center">
          <p className="text-3xl font-bold">User @{username} not found</p>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
