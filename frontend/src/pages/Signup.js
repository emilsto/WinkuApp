//page that lets you signup to the app

import React, { useState } from "react";

const Signup = () => {
  //set up state for the signup form
  const [signup, setSignup] = useState({
    username: "",
    password: "",
  });

  //handle change for the signup form

  const handleChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  //handle submit for the signup form

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signup);
    //push the signup to the database

    //clear the signup box

    setSignup({
      username: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col w-full m-5 justify-center">
      <h1 className="text-3xl font-bold">Signup</h1>
      <div className="flex flex-col border border-slate-400 p-2 my-2">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center">
          <label className="font-bold">Username</label>
          <input
            className="border border-slate-400 p-2 my-2"
            type="text"
            name="username"
            value={signup.username}
            onChange={handleChange}
          />
          <label className="font-bold">Password</label>
          <input
            className="border border-slate-400 p-2 my-2"
            type="password"
            name="password"
            value={signup.password}
            onChange={handleChange}
          />
          <label className="font-bold">Confirm Password</label>
          <input
            className="border border-slate-400 p-2 my-2"
            type="password"
            name="confirmPassword"
            value={signup.confirmPassword}
            onChange={handleChange}
          />

          <button
            className="bg-red-500 text-white p-2 my-2 w-1/2"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
