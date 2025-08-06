import { useEffect, useState } from "react";
import Card from "./Card";
import { YOUTUBE_API } from "../utils/constants";
import { Link } from "react-router-dom";


const CardsContainer = () => {
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    getFetchedData()
  },[])

 const getFetchedData = async ()=> {
   const data = await fetch(YOUTUBE_API);
   const jsonData = await data.json();
   console.log(jsonData.items[0])
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
