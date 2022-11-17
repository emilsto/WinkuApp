//page that contains the login form. Or signup form if the user is new
import React, { useState, useContext } from "react";
import axios from "../api/axios";

const LOGIN_URL = "/api/login";

const Login = () => {
  //set up state for the login form
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  //state for the error message
  const [error, setError] = useState("");
  //error message ref

  //handle change for the login form

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  //handle submit for the login form

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(login);
    //check that login credentials have been entered
    if (login.username === "" || login.password === "") {
      setError("Please enter your username and password");
      return;
    }

    // sign in the user

    try {
      //send the login credentials to the server
      const response = await axios.post(LOGIN_URL,
      JSON.stringify(login),
      {
        headers: { "Content-Type": "application/json" }
      });
      const token = response.data;
      localStorage.setItem("token", token);
      console.log(token);

      //clear the login form
      setLogin({
        username: "",
        password: "",
      });
      //redirect to the home page
      window.location.href = "/";
    
    } catch (error) {
      if(error?.response?.statusCode === 401){
        setError("Invalid username or password");
      }
      else if(error?.response?.status === 500){
        setError("Internal server error");
      }
      else{
        console.log(error);
      }
    }

  };

  return (
    <div className="flex flex-col w-full m-5">
      <h1 className="text-4xl font-bold">Login</h1>
      <div className="flex flex-col border border-slate-400 p-2 my-2">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-xl">Username</label>
            <input
              className="border border-slate-400 p-2"
              type="text"
              name="username"
              value={login.username}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col mt-2">
            <label className="text-xl">Password</label>
            <input
              className="border border-slate-400 p-2"
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col mt-2">
            <p className="text-red-600">{error}</p>
            <button
              className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700"
              onClick={handleSubmit}
            >
              Login
            </button>
            <p className="text-gray-400 text-sm mt-2">
              Don't have an account? Sign up <a href="/signup">here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
