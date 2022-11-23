//page that contains the login form. Or signup form if the user is new
import React, { useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const LOGIN_URL = "/api/login";

const Signup = () => {
  //set up state for the login form
  const [login, setLogin] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  //state for the error message
  const [error, setError] = useState("");

  //handle change for the sighup form

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  //handle submit for the signup form

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(login);
    //check that login credentials have been entered
    if (login.username === "" || login.password === "") {
      setError("Please enter your username and password");
      return;
    }
    //check that the passwords match
    if (login.password !== login.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  };

  return (
    <div className="flex flex-col m-5">
            <label className="text-xl my-2">Username</label>
            <input
              className="border border-slate-400 p-2"
              type="text"
              name="username"
              value={login.username}
              onChange={handleChange}
            ></input>
            <label className="text-xl mt-2">Password</label>
            <input
              className="border border-slate-400 p-2"
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
            ></input>
            <label className="text-xl mt-2">Confirm Password</label>
            <input
              className="border border-slate-400 p-2"
              type="password"
              name="confirmPassword"
              value={login.confirmPassword}
              onChange={handleChange}
            ></input>
            <p className="text-red-600 mt-2">{error}</p>
            <button
              className="bg-purple-500 text-white p-2 rounded-md hover:bg-purple-700"
              onClick={handleSubmit}
            >
              Signup!
            </button>
            <p className="text-gray-400 text-sm mt-2">
              Already registered? Log in <Link to="/login" className="underline hover:text-gray-800">here</Link>
            </p>
    </div>
  );
};

export default Signup;
