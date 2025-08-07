import { useSelector } from "react-redux"
import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"
import Header from "./Header"


const Body = () => {
  const toggleState = useSelector(store => store.toggle.toggleState)
  return (
    <>
      <Header />
      <main className="body-container">
        <SideBar />
        <Outlet />
      </main>
    </>
  );

}

export default Body