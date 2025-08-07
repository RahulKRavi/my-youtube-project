import { useEffect, useState } from "react";
import Card from "./Card";
import { YOUTUBE_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sideBarActivate } from "../utils/toggleSlice";

const CardsContainer = () => {
  const [videos,setVideos] = useState([])
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(sideBarActivate())
    getFetchedData()
  },[])

 const getFetchedData = async ()=> {
   const data = await fetch(YOUTUBE_API);
   const jsonData = await data.json();
   setVideos(jsonData.items)
 }

  if(videos.length !==0) return (
    <section className="cards-container">
      {videos.map((item)=>{
        return <Link to={'/watch?v='+item.id} key={item.id}><Card  item={item}/></Link>
      })}
    </section>
  );
};

export default CardsContainer;
