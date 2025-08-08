import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../store/toggleSlice.js";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";

const Header = () => {
  const dispatch = useDispatch()

  function handleOnclick(){
    dispatch(toggleSideBar())
  }

  return (
    <header className="header-container">
      <div className="header-left">
        <img onClick={()=>handleOnclick()} className="menu-icon" alt="menu-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" />
        <Link to='/'><img className="youtube-logo" alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614" /></Link>
      </div>
      <Search/>
      <div className="header-right">
        <img className="user-icon" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
      </div>
    </header>
  );
};

export default Header;

