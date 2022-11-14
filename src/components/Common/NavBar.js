//basic navbar component
import React from "react";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-rgb(20, 27, 31) drop-shadow-xl p-5">
      <div>
        <div className="flex justify-center text-2xl">
          <div className="hover:text-red-600">
            <a href="/">Winku</a>
          </div>
          <div className="ml-5 hover:text-red-600">
            <a href="/about">About</a>
          </div>
          <div className="ml-5 hover:text-red-600">
            <a href="/archive">Archive</a>
          </div>
          <div className="ml-5 hover:text-red-600">
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
