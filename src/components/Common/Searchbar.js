//searchbar component to search for users and posts

import React, { useState } from "react";

const Searchbar = () => {
    //set up state for the search
    const [search, setSearch] = useState({
        query: "",
    });
    
    //handle change for the search
    const handleChange = (e) => {
        setSearch({
        ...search,
        [e.target.name]: e.target.value,
        });
    };
    
    //handle submit for the search
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        //search the database for the query
    
        //clear the search bar
    
        setSearch({
        query: "",
        });
    };
    
    return (
        <div className="flex flex-row">
        <form onSubmit={handleSubmit}>
            <input
            className="border border-slate-400 rounded-full p-2 m-2"
            type="text"
            name="query"
            value={search.query}
            onChange={handleChange}
            placeholder="Search"
            ></input>
        </form>
        </div>
    );
    }

    export default Searchbar;