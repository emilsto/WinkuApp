import { useEffect, useState } from "react";
import Posts from "../components/Posts/Posts";
import PostBox from "../components/Posts/PostBox";
import axios from "../api/axios";


const user = {
  _id: "1",
  username: "emilTheDev",
  bio: "I need a job",
  avatar: "https://avatars.githubusercontent.com/u/61960869?v=4",
};


const FrontPage = () => {
  //data from the API
    const [data, setData] = useState([]);
    const [isLogged, setIsLogged] = useState(false);

    //check if user is logged in via local storage
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, []);

  //fetch fresh data from the API
  const apiCall = async () => {
    const res = await fetch("http://localhost:4000/api/poss");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    apiCall();
  }, []);


  return (
    <div className="flex flex-col m-5">
      {isLogged ? <PostBox user={user}/> : <p>Please log in to post</p>}
      <Posts data={data} />
    </div>
  );
};

export default FrontPage;
