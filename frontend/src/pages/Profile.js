//Page that displays content of a single user
import React, { useState, useEffect } from "react";
import PostFrame from "../components/Posts/PostFrame";

const Profile = ({id}) => {
    const [user, setUser] = useState({});
    
    useEffect(() => {
        const fetchUser = async () => {
        const res = await fetch("/api/users/:id", {
        });
        const data = await res.json();
        setUser(data);
        };
        fetchUser();
    }, []);
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img
            className="w-32 h-32 mb-4 rounded-full"
            