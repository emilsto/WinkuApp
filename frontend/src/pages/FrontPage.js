import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Posts from "../components/Posts/Posts";
import PostBox from "../components/Posts/PostBox";
import LoadingPosts from "../components/Posts/PostSkeleton";
import axios from "../api/axios";
import NavBar from "../components/Common/NavBar";
import LeftNav from "../components/Common/LeftNav";

const user = {
  _id: "1",
  username: "emilTheDev",
  bio: "I am emilTheDev",
  avatar:
    "https://avatars.githubusercontent.com/u/70722483?s=400&u=062dbb94384357152ec92a57e94c5614145687f6&v=4",
  isAdmin: true,
};

//dummy user that encourages the user to log in
const dummy_user = {
  _id: "2",
  username: "Log in to post",
  bio: "Log in to post",
  avatar:
    "https://avatars.githubusercontent.com/u/70722483?s=400&u=062dbb94384357152ec92a57e94c5614145687f6&v=4",
  isAdmin: false,
};

const FrontPage = () => {
  //data from the API
  const [data, setData] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(1);

  //check if user is logged in via local storage
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    }
    //set user data to API data
  }, []);

  //fetch fresh data from the API
  const apiCall = async () => {
    const res = await axios.get(`http://localhost:4000/api/posts/pages/${offset}`);
    console.log("called api with offset: " + offset);
    const data = res.data;
    setOffset((prevOffset) => prevOffset + 1);
    //if retrieved data is empty, set hasMore to false
    if (data.length === 0) {
      setHasMore(false);
    }
    //add new data to the site and render it
    //if there is a duplicate, it will be ignored
    setData((prevData) => [...prevData, ...data]);
    setIsLoading(false);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    console.log("offset", offset);
    apiCall();
  };
  

  return (
    <div className="flex flex-col w-full">
            {isLogged ? <PostBox user={user} /> : null}
      <InfiniteScroll
          dataLength={data.length}
          next={handleLoadMore}
          hasMore={hasMore}
          loader={<LoadingPosts />}
          endMessage={
            <div className="flex flex-col justify-items-center text-center border-t border-slate-200">
              <p className="text-purple-500 text-3xl font-bold m-5">D:</p>
            <p className="text-purple-500 text-3xl font-bold m-5">Oh no! Out of posts</p>
            </div>
          }
        >
          <Posts data={data} />
        </InfiniteScroll>
    </div>
  );
};

export default FrontPage;
