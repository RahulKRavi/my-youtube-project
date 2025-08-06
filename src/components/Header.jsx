import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/toggleSlice.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch()
  const [searchTxt,setSearchTxt] = useState('')
  function handleOnclick(){
    dispatch(toggleSideBar())
  }
  function handleSearchQuery(e){
    setSearchTxt(e.target.value)
  }
  return (
    <header className="header-container">
      <div className="header-left">
        <img onClick={()=>handleOnclick()} className="menu-icon" alt="menu-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" />
        <Link to='/'><img className="youtube-logo" alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614" /></Link>
      </div>

      <div className="header-center">
        <input onChange={(e)=>handleSearchQuery(e)}className="search-input" type="text" value={searchTxt} />
        <button className="search-button">
          <img alt="search-icon" src="https://cdn-icons-png.flaticon.com/512/49/49116.png" />
        </button>
      </div>

      <div className="header-right">
        <img className="user-icon" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
      </div>
    </header>
  );
};

export default Header;

