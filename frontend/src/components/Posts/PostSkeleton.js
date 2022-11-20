//this is the skeleton component that will be displayed while the post is loading
import React from "react";

const PostSkeleton = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="animate-pulse border border-slate-300 shadow rounded-md p-4 max-w-m m-2 w-full mx-auto">
        <div className="flex flex-row items-center m-5">
          <div className="w-12 h-12 rounded-full bg-slate-400"></div>

          <div className="flex flex-col mx-1">
            <div className="w-20 h-4 bg-slate-400 rounded"></div>
            <div className="w-32 h-4 bg-slate-400 rounded mt-1"></div>
          </div>
        </div>
        <div className="flex flex-col mx-5 w-full">
          <div className="w-1/2 h-6 bg-slate-400 rounded"></div>
          <div className="w-64 h-6 bg-slate-400 rounded mt-2"></div>
        </div>
        <div className="flex flex-row mx-3">
          <div className="w-20 h-8 bg-slate-400 rounded m-2"></div>
          <div className="w-20 h-8 bg-slate-400 rounded m-2"></div>
          </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
