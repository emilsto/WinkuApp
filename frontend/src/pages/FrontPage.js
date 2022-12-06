import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Posts from "../components/Posts/Posts";
import PostBox from "../components/Posts/PostBox";
import Spinner from "../components/Common/Spinner";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

const POST_URL = "/api/posts";

const FrontPage = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(1);
  const { auth } = useAuth();

  //fetch fresh data from the API
  const fetchData = async (offset) => {
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
      setData((prevData) => [...prevData, ...data]);
    } catch (error) {}
  };

  if (offset === 1) {
    fetchData(offset);
  }

  //function to be called when the user scrolls to the bottom of the page
  const handleLoadMore = () => {
    fetchData(offset);
  };

  const addData = async (addData) => {
    try {
      console.log("addData: ", addData);
      const token = localStorage.getItem("token");
      const response = await axios.post(POST_URL, JSON.stringify(addData), {
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      const resdata = response.data;
      setData((prevData) => [resdata, ...prevData]);
    } catch (error) {
      
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      {auth.isLogged ? <PostBox user={auth.user} addData={addData} /> : null}
      <InfiniteScroll
        dataLength={data.length}
        next={handleLoadMore}
        hasMore={hasMore}
        loader={<Spinner />}
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
