//page that contains the login form. Or signup form if the user is new
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import LoginBox from "../components/Login/LoginBox";

import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const LOGIN_URL = "/api/login";

const Login = () => {
  //dont let the user see this page if they are already logged in
  const { auth } = useContext(AuthContext);
  


  //set up state for the login form
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const { setAuth } = useContext(AuthContext);
  const history = useHistory();

  if (auth.token) {
    history.push("/");
  }
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
      if (error?.response?.status === 401) {
        setError("Invalid username or password");
      } else if (error?.response?.status === 500) {
        setError("Internal server error");
        console.log(error.response);
      } else {
        console.log(error);
        setError("Whoops, something went wrong");
      }
    }
  };
  return (
    <LoginBox
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      login={login}
      error={error}
    />
  );
};

export default Login;
