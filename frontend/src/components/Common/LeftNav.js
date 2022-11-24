//leftnav renders different links based on if user is logged in or not
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LeftNav = () => {
  //get useAuth hook
  const { auth } = useAuth();

  //set up state for the login
  const [isLogged, setIsLogged] = useState(false);

  const loggedInCheck = () => {
    if (auth.token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  useEffect(() => {
    loggedInCheck();
  });

  return (
    <div className="w-2/6">
      <div className="text-xl sticky z-50 top-0">
        <div className="grid grid-cols-1 gap-4 content-between float-right mr-12">
          <Link to="/" className="mt-5">
            # winku
          </Link>
          <Link to="/about"># about</Link>
          <Link to="/archive"># archive</Link>
          {isLogged ? (
            <Link to={`/${auth.user.username}`}># {auth.user.username}</Link>
          ) : null}
          {isLogged ? (
            <Link to="/logout"># logout</Link>
          ) : (
            <Link to="/login"># login</Link>
          )}
          {isLogged ? null : <Link to="/signup"># signup</Link>}
          <div className="hover:text-purple-600">
            <button className="bg-purple-500 hover:text-slate-500 text-white font-bold px-8 py-2 rounded-full">
              Wingu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
