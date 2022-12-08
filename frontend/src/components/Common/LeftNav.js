//leftnav renders different links based on if user is logged in or not
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import axios from "../../api/axios";

import {
  FiHome,
  FiInfo,
  FiArchive,
  FiUser,
  FiLogOut,
  FiLogIn,
  FiPlus,
} from "react-icons/fi";

const ICON_SIZE = 28;
const POST_URL = "/api/posts";


const LeftNav = () => {
  //get useAuth hook
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState("home");

  const { auth } = useAuth();

  // Refresh the component whenever the auth state variable changes
  useEffect(() => {
    setState("home");
  }, [auth]);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const addData = async (addData) => {
    try {
      console.log("addData: ", addData);
      const token = localStorage.getItem("token");
      const response = await axios.post(POST_URL, JSON.stringify(addData), {
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:w-2/6 hidden md:inline">
      <div className="text-xl sticky z-10 top-0 p-5">
        <div className="grid grid-cols-1 gap-4 content-between float-right mr-12">
        <p className="hover:bg-slate-200 p-1 rounded-xl"><Link to="/" className="mt-5">
            <FiHome size={ICON_SIZE} className="inline"/> Winku
          </Link></p>
          <p className="hover:bg-slate-200 p-1 rounded-xl"><Link to="/about"><FiInfo size={ICON_SIZE} className="inline"/> About</Link></p>
          <p className="hover:bg-slate-200 p-1 rounded-xl"><Link to="/archive"><FiArchive size={ICON_SIZE} className="inline"/> Archive</Link></p>
          {auth.isLogged ? (
             <p className="hover:bg-slate-200 p-1 rounded-xl"><Link to={`/${auth.user.username}`}><FiUser size={ICON_SIZE} className="inline"/>  {auth.user.username}</Link></p>
          ) : null}
          {auth.isLogged ? (
             <p className="hover:bg-slate-200 p-1 rounded-xl"><Link to="/logout"><FiLogOut size={ICON_SIZE} className="inline"/> Logout</Link></p>
          ) : (
            <p className="hover:bg-slate-200 p-1 rounded-xl"><Link to="/login"><FiLogIn size={ICON_SIZE} className="inline"/> Login</Link></p>
          )}
          {auth.isLogged ?             <button
              className="bg-purple-500 hover:text-slate-500 text-white font-bold px-8 py-2 rounded-full"
              onClick={showModalHandler}
            >
              Wingu
            </button> :  <p className="hover:bg-slate-200 p-1 rounded-xl"><Link to="/signup"><FiPlus size={ICON_SIZE} className="inline"/> Signup</Link></p>}
          <div className="hover:text-purple-600">

            {showModal ? <Backdrop onClick={hideModalHandler} /> : null}
            {showModal ? (
              <>              
              <Modal onClick={hideModalHandler} onClose={hideModalHandler} user={auth.user} origin={state} addData={addData}/>
              </>

            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
