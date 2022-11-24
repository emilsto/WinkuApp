//login box component
import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";

const LOGIN_URL = "/api/login";

const LoginBox = () => {
  //set up state for the login form
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const { setAuth } = useContext(AuthContext);
  const history = useHistory();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(login);
    //check that login credentials have been entered
    if (login.username === "" || login.password === "") {
      setError("Please enter your username and password");
      return;
    }
    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify(login), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log("res.data: ", response.data);
      const token = response.data.token;
      console.log("token: ", token);
      const user = response.data.user;
      localStorage.setItem("token", token);
      console.log(user);
      setAuth({ token, user });
      //clear the login form
      setLogin({
        username: "",
        password: "",
      });
      //push to the home page
      history.push("/");
    } catch (error) {
      if (error?.response?.statusCode === 401) {
        setError("Invalid username or password");
      } else if (error?.response?.status === 500) {
        setError("Internal server error");
      } else {
        console.log(error);
      }
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
      <p className="text-red-600 mt-2">{error}</p>
      <button
        className="bg-purple-500 text-white p-2 rounded-md hover:bg-purple-700"
        onClick={handleSubmit}
      >
        Login
      </button>
      <p className="text-gray-400 text-sm mt-2">
        Don't have an account? Sign up{" "}
        <Link to="/signup" className="underline hover:text-gray-800">
          here
        </Link>
      </p>
    </div>
  );
};

export default LoginBox;
