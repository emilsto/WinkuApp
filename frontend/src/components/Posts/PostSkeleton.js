//this is the skeleton component that will be displayed while the post is loading
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const PostSkeleton = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center m-5">
          <h2 className="text-2xl font-bold">Loading...</h2>
          <ClipLoader
            color="red"
            loading={true}
            cssOverride={false}
            size={120}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
