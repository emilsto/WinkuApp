import React, { useState } from 'react';

const Settings = ({ user, handleSubmit }) => {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [profilePic, setProfilePic] = useState(user.image);

  const handleChange = (event) => {
    if (event.target.name === 'name') setName(event.target.value);
    else if (event.target.name === 'bio') setBio(event.target.value);
    else if (event.target.name === 'profilePic') setProfilePic(event.target.value);
    console.log(event.target.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      Username:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Bio:
        <input
          type="text"
          name="bio"
          value={bio}
          onChange={handleChange}
        />
      </label>
      <label>
        Profile Picture:
        <input
          type="file"
          name="profilePic"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>

    </form>
  );
};

export default Settings;