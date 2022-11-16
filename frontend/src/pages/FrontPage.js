import { useEffect, useState } from "react";
import Posts from "../components/Posts/Posts";
import PostBox from "../components/Posts/PostBox";

const user = {
  _id: "1",
  username: "emilTheDev",
  bio: "I need a job",
  avatar: "https://avatars.githubusercontent.com/u/61960869?v=4",
};


const FrontPage = () => {
    const [data, setData] = useState([]);

  //fetch fresh data from the API
  const apiCall = async () => {
    const res = await fetch("http://localhost:4000/api/posts");
    const data = await res.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    apiCall();
  }, []);

  //map over the data and display it

  return (
    <div className="flex flex-col items-center m-5">
      <PostBox user={user}/>
      <Posts data={data}/>
    </div>
  );
};

export default FrontPage;
