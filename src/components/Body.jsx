import { useSelector } from "react-redux"
import CardsContainer from "./CardsContainer"
import SideBar from "./SideBar"
import store from "../utils/store"
const Body = () => {
  const toggleState = useSelector(store => store.toggle.toggleState)
  return (
    <main className="body-container">
      {toggleState &&      <SideBar /> }
      <CardsContainer/>
    </main>
  )
}

export default Body