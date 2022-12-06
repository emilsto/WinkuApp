import React, { useState } from 'react';

const Settings = ({ user, handleSubmit }) => {
  const [name, setName] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [profilePic, setProfilePic] = useState(user.image);


  return (
    <form onSubmit={handleSubmit}>
      <label>
      Username:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input w-full p-2"
        />
      </label>
      <label>
        Bio:
        <input
          type="text"
          name="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="form-input w-full p-2"
        />
      </label>
      <label>
        Profile picture URL:
        <input
          type="text"
          name={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          className="form-input w-full p-2"
        />
      </label>
      <button type="submit" className="my-2 bg-purple-500 text-neutral-50 font-bold rounded-3xl p-2 text-xl inline-flex items-center p-2 hover:bg-purple-800 px-4">
  Save
</button>
    </form>
  );
};

export default Settings;