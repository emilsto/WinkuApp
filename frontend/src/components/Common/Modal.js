//modal that holds the postbox

import React from "react";
import PostBox from "../Posts/PostBox";

const Modal = (props) => {

  return (
    <>
      <div className="absolute w-full h-full z-50">
        <div className="flex flex-col items-center justify-center">
          <PostBox user={props.user} from={props.origin} />
          <button>cancel</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
