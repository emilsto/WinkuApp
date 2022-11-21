//basic navbar component
import React from "react";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    }
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-rgb(20, 27, 31) drop-shadow-xl p-5">
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <p>Home</p>
            </div>
            </div>
      </div>
    </nav>
  );
};

export default NavBar;
