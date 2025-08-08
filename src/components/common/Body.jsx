import Header from "./Header"
import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"

const Body = () => {
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