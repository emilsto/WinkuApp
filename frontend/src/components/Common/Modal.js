//modal that holds the postbox

import React from "react";
import PostBox from "../Posts/PostBox";
import "./Modal.css"

import { AiOutlineClose } from "react-icons/ai";

const Modal = (props) => {



  return (
    <>
      <div className="modal ">
        <div className="flex w-full pb-5">      <button className="inline close text-black hover:bg-slate-200 rounded-full p-2" onClick={props.onClose}><AiOutlineClose/></button>
</div>
          <PostBox user={props.user} from={props.origin} addData={props.addData} />
        </div>
    </>
  );
};

export default Modal;
