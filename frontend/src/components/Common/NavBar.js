//basic navbar component
import React from "react";
import { useState, useEffect} from "react";

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
        <div className="flex justify-center text-2xl">
          <div className="hover:text-red-600 p-3">
            <a href="/">Winku</a>
          </div>
          <div className="ml-5 hover:text-red-600 p-3 ">
            <a href="/about">About</a>
          </div>
          <div className="ml-5 hover:text-red-600 p-3 ">
            <a href="/archive">Archive</a>
          </div>
          <div className="ml-5 hover:text-red-600 p-3 ">
          {isLogged ? <a href="/logout">Logout</a> :  <a href="/login">Login</a>}
          </div>
          <div className="ml-5 hover:text-red-600 p-3 ">
            <button className="bg-red-600 hover:text-slate-500 text-white font-bold px-3 rounded-full">Wingu</button>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
