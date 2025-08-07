import { useEffect, useState } from "react";
import { SEARCH_API } from "../utils/constants";

const Search = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const getSearchData = async (searchTxt)=> {
    const data = await fetch(SEARCH_API+searchTxt)
    const json = await data.json()
    console.log(json)
  }
  useEffect(()=>{
    const timer = setTimeout(()=>getSearchData(searchTxt),2000)
    return ()=>clearInterval(timer)
  },[searchTxt])

  function handleSearchQuery(e) {
    setSearchTxt(e.target.value);
  }
  return (
    <div className="header-center">
      <input
        onChange={(e) => handleSearchQuery(e)}
        className="search-input"
        type="text"
        value={searchTxt}
      />
      <button className="search-button">
        <img
          alt="search-icon"
          src="https://cdn-icons-png.flaticon.com/512/49/49116.png"
        />
      </button>
    </div>
  );
};

export default Search;
