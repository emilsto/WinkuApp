import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Posts from "../components/Posts/Posts";
import PostBox from "../components/Posts/PostBox";
import LoadingPosts from "../components/Posts/PostSkeleton";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

const FrontPage = () => {
  //states
  const [data, setData] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(1);

  //auth custom hook
  const { auth } = useAuth();

  //fetch fresh data from the API
  const apiCall = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/posts/pages/${offset}`
      );
      const data = res.data;
      setOffset((prevOffset) => prevOffset + 1);
      //if retrieved data is empty, set hasMore to false
      if (data.length === 0) {
        setHasMore(false);
      }
      //add new data to the site and render it
      //if there is a duplicate, it will be ignored
      setData((prevData) => [...prevData, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  //check if user is logged in via local storage and do the initial fetch
  useEffect(() => {
    if (auth.token) {
      setIsLogged(true);
    }
  }, [auth.token]);

  const handleLoadMore = () => {
    console.log("offset", offset);
    apiCall();
  };

  const addData = (param) => {
    setData((prevData) => [param, ...prevData]);
  };

  return (
    <div className="flex flex-col w-full">
      {isLogged ? <PostBox user={auth.user} addData={addData} /> : null}
      <InfiniteScroll
        dataLength={data.length}
        next={handleLoadMore}
        hasMore={hasMore}
        loader={<LoadingPosts />}
        endMessage={
          <div className="flex flex-col justify-items-center text-center border-t border-slate-200">
            <p className="text-purple-500 text-3xl font-bold m-5">D:</p>
            <p className="text-purple-500 text-3xl font-bold m-5">
              Oh no! Out of posts
            </p>
          </div>
        }
      >
        <Posts data={data} />
      </InfiniteScroll>
    </div>
  );
};

export default FrontPage;
