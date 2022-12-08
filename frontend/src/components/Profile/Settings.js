import React, { useState } from "react";

const Settings = ({ user, handleUserUpdate }) => {

  const [newInfo, setNewInfo] = useState({
    username: user.username,
    bio: user.bio,
    image: user.image
  });

  //handlechange for inputs
  const handleChange = (e) => {
    setNewInfo({
      ...newInfo,
      [e.target.name]: e.target.value
    });
  };

  return (

      <div className="flex flex-col m-5">
        <label className="text-lg my-2">           Username:</label>

          <input
            type="text"
            name="username"
            value={newInfo.username}
            onChange={handleChange}
            className="border border-slate-400 p-2"
          />
        <label className="text-lg my-2">        Bio:     </label>
          <input
            type="text"
            name="bio"
            value={newInfo.bio}
            onChange={handleChange}
            className="border border-slate-400 p-2"
          />
        <label className="text-lg my-2">   Profile picture URL:       </label>

        
          <input
            type="text"
            name="image"
            value={newInfo.image}
            onChange={handleChange}
            className="border border-slate-400 p-2"
          />
        <label className="text-xl my-2">     </label>


        <button
          onClick={handleUserUpdate}
          className="bg-purple-500 text-white p-2 rounded-md hover:bg-purple-700 mt-4"
        >
          Save
        </button>
      </div>
      
  );
};

export default Settings;
