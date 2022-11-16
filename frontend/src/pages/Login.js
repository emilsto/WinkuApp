//page that contains the login form. Or signup form if the user is new
import React, { useState } from "react";

// dummy data that contains the valid username and password

const users = [
  {
    username: "emilTheDev",
    password: "password",
  },
  {
    username: "emilTheDev2",
    password: "password",
  },
  {
    username: "emilTheDev3",
    password: "password",
  },
];

const Login = () => {
  //set up state for the login form
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  //handle change for the login form

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  //handle submit for the login form

  const handleSubmit = (e) => {
    e.preventDefault();
    //check if the username and password match the dummy data
    const user = users.find(
      (user) =>
        user.username === login.username && user.password === login.password
    );
    //if the user exists, log them in
    if (user) {
      console.log("logged in");
    }
    //if the user does not exist, tell the user that the username or password is incorrect
    else {
      console.log("username or password is incorrect");
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
