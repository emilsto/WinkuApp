import { useEffect, useState } from "react";
import Posts from "../components/Posts";

const FrontPage = () => {
  //fetch fresh data from the API
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  //map over the data and display it

  return (
    <div className="flex flex-col items-center">
      <Posts />
    </div>
  );
};

export default FrontPage;
