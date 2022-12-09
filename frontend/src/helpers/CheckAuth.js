import { useContext, useEffect } from "react";

import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const CheckAuth = () => {
  const { setAuth } = useContext(AuthContext);

  //check if user is logged in via local storage and
  useEffect(() => {
    const saved_token = { token: localStorage.getItem("token") };
    if (saved_token) {
      const checkToken = async () => {
        try {
          const response = await axios.post(
            "/api/auth/check",
            JSON.stringify(saved_token),
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          );
          const token = response.data.token;
          const user = response.data.user;
          localStorage.setItem("token", token);
          setAuth({ token, user, isLogged: true });
        } catch (error) {
            localStorage.removeItem("token");
            setAuth({ token: null, user: null, isLogged: false });
          }
        }
        checkToken();
      };
    },  [setAuth]);
};

export default CheckAuth;
