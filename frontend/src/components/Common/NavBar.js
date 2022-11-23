//basic navbar component
import React,{ useState, useEffect}  from "react";
const NavBar = ({site}) => {

  const [url, setUrl] = useState("Home");
  useEffect(() => {
    
    console.log(url);
  }, [url]);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-rgb(20, 27, 31) drop-shadow-xl p-5">
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <p className="text-xl">{url}</p>
            </div>
            </div>
      </div>
    </nav>
  );
};

export default NavBar;
