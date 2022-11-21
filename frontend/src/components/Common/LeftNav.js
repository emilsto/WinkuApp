//leftnav renders different links based on if user is logged in or not

import { useState, useEffect} from "react";

const LeftNav = ({ user }) => {

    const [isLogged, setIsLogged] = useState(false);
    
    const loggedInCheck = () => {
        if (user) {
            setIsLogged(true);
        }
    };
    
    useEffect(() => {
        loggedInCheck();
    });
    
    return (
        <div className="w-2/6">
        <div className="text-xl sticky z-50 top-0">
            <div className="grid grid-cols-1 gap-4 content-between float-right mr-12">
            <a href="/" className="mt-5"># Winku</a>
            <a href="/about"># about</a>
            <a href="/archive"># Archive</a>
            {isLogged ? (
                <a href={`/${user.username}`}># {user.username}</a>
            ) : null}
            {isLogged ? (
                <a href="/logout"># logout</a>
            ) : (
                <a href="/login"># login</a>
            )}
            {isLogged ? null : <a href="/signup"># signup</a>}
          <div className="hover:text-purple-600">
            <button className="bg-purple-500 hover:text-slate-500 text-white font-bold px-8 py-2 rounded-full">
              Wingu
            </button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default LeftNav;