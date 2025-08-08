import { useEffect, useState } from "react";
import { SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestions } from "../store/searchSlice";

const Search = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const getSearchData = async (searchTxt) => {
    const data = await fetch(SEARCH_API + searchTxt);
    const json = await data.json();
    dispatch(addSuggestions({ [searchTxt]: json[1] }));
    setSuggestions(json[1]);
  };

  useEffect(() => {
    if (searchCache[searchTxt]) {
      setSuggestions(searchCache[searchTxt]);
    } else {
      const timer = setTimeout(() => getSearchData(searchTxt), 200);
      return () => clearTimeout(timer);
    }
  }, [searchTxt]);

  return (
    <div className="header-center">
      <input
        onChange={(e) => setSearchTxt(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
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
      {showSuggestions && (
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
