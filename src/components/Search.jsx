import { useEffect, useState } from "react";
import { SEARCH_API } from "../utils/constants";

const Search = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [suggestions, setSuggestions] = useState([])
  const getSearchData = async (searchTxt) => {
    const data = await fetch(SEARCH_API + searchTxt);
    const json = await data.json();
    setSuggestions(json[1])
  };
  useEffect(() => {
    const timer = setTimeout(() => getSearchData(searchTxt), 200);
    return () => clearTimeout(timer);
  }, [searchTxt]);

  return (
    <div className="header-center">
      <input
        onChange={(e) => setSearchTxt(e.target.value)}
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
      {suggestions.length > 0 && (
        <ul className="suggestions-dropdown">
          {suggestions.map((item, index) => (
            <li key={index} className="suggestion-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
