import { useContext, useEffect } from "react";

import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const CheckAuth = (props) => {
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
          setAuth({ token, user });
        } catch (error) {
          console.log(error);
        }
      };
      checkToken();
    } else {
      setAuth(null);
    }
  }, [setAuth]);
};

export default CheckAuth;
