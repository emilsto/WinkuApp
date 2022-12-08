//leftnav renders different links based on if user is logged in or not
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  FiHome,
  FiInfo,
  FiArchive,
  FiUser,
  FiLogOut,
  FiLogIn,

} from "react-icons/fi";

const ICON_SIZE = 32;

const BottomNav = () => {
  //get useAuth hook
  const [state, setState] = useState("home");

  const { auth } = useAuth();

  // Refresh the component whenever the auth state variable changes
  useEffect(() => {
    setState("home");
  }, [auth]);


  return (
    <div className="sticky bottom-0 z-20 backdrop-blur-sm bg-rgb(20, 27, 31) drop-shadow-xl md:hidden">
      <div className="flex flex-row justify-between p-5">
        <Link to="/" className="nav-icon">
          <FiHome size={ICON_SIZE} />
        </Link>
        <Link to="/about" className="nav-icon">
          <FiInfo size={ICON_SIZE} />
        </Link>
        <Link to="/archive" className="nav-icon">
          <FiArchive size={ICON_SIZE} />
        </Link>
        {auth.isLogged ? (
          <Link to={`/${auth.user.username}`} className="nav-icon">
            <FiUser size={ICON_SIZE} />
          </Link>
        ) : null}
        {auth.isLogged ? (
          <Link to="/logout" className="nav-icon">
            <FiLogOut size={ICON_SIZE} />
          </Link>
        ) : (
          <Link to="/login" className="nav-icon">
            <FiLogIn size={ICON_SIZE} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default BottomNav;
