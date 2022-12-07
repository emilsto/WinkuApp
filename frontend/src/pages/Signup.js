//page that contains the login form. Or signup form if the user is new
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

const Signup = () => {
  //set up state for the login form
  const [login, setLogin] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  //state for the error message
  const [error, setError] = useState("");
  const [sucess, setSuccess] = useState(false);

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
  // Check that login credentials have been entered
  if (login.username === "" || login.password === "") {
    setError("Please enter your username and password");
    return;
  }
  // Check that the passwords match
  if (login.password !== login.confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  // Send the login data to the backend
  try {
    const response = await axios.post("/api/create", JSON.stringify(login), {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log("res.data: ", response.data);
      setSuccess(true);
  } catch (error) {
    if (error?.response?.status === 400) {
      setError("Username and password are required!");
    } else if (error?.response?.status === 401) {
      setError("Username already exists");
      console.log(error.response);
    } else {
      console.log(error);
      setError("Whoops, something went wrong");
    }
  }
}


  return (
    <>
      {sucess ? (
        <div className="m-5">
          <div className="flex flex-col py-5">
            <p className="py-2">
              You have successfully created an account. Please{" "}
              <Link to="/login" className="underline">
                login
              </Link>{" "}
              to continue.
            </p>
          </div>
        </div>
      ) : (
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
            Already registered? Log in{" "}
            <Link to="/login" className="underline hover:text-gray-800">
              here
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default Signup;
