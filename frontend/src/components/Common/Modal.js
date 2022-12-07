//modal that holds the postbox

import React from "react";
import PostBox from "../Posts/PostBox";
import "./Modal.css";

const Modal = (props) => {

  return (
    <>
      <div className="modal">
        <div className="flex flex-col items-center justify-center">
          <PostBox user={props.user} from={props.origin} />
          <button>cancel</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
