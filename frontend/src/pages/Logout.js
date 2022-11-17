//logout page, simply clears the token from local storage and redirects to the home page

import React, { useEffect } from "react";

const Logout = () => {
    useEffect(() => {
        localStorage.clear();
        window.location.href = "/";
    }, []);
    
    return <div></div>;
    }

export default Logout;