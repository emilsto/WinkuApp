//this is the skeleton component that will be displayed while the post is loading
import React from "react";

const PostSkeleton = () => {
  return (
    <div className="flex flex-col w-full p">
      <div className="animate-pulse border-t border-x border-slate-300 p-4 max-w-m w-full hover:bg-slate-50">
        <div className="flex flex-row items-center">
          <div className="w-12 h-12 rounded-full bg-slate-400"></div>

          <div className="flex flex-col mx-1">
            <div className="w-25 h-4 bg-slate-400 rounded"></div>
            <div className="w-32 h-4 bg-slate-400 rounded mt-1"></div>
          </div>
        </div>
        <div className="flex flex-col mx-5 w-full mt-1 ml-12">
          <div className="w-1/2 h-6 bg-slate-400 rounded"></div>
          <div className="w-64 h-6 bg-slate-400 rounded mt-2"></div>
          <div className="w-48 h-6 bg-slate-400 rounded mt-2"></div>
        </div>
        <div className="flex flex-row ml-12">
          <div className="w-14 h-7 bg-slate-400 rounded-l mt-2"></div>
          <div className="w-14 h-7 bg-slate-400 rounded-r mt-2"></div>
        </div>
      </div>
    </div>
  );
};

const LoadingPosts = () => {
  const loadPosts = [1, 2, 3, 4, 5];
  return (
    <div>
      {loadPosts.map((num) => {
        return <PostSkeleton key={num} />;
      })}
    </div>
  );
};

export default LoadingPosts;
