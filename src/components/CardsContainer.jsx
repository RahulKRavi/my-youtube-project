import { useEffect, useState } from "react";
import Card from "./Card";
import { YOUTUBE_API } from "../utils/constants";


const CardsContainer = () => {
  const [videos,setVideos] = useState([])
  useEffect(()=>{
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
        return <Card key={item.id} item={item}/>
      })}
    </section>
  );
};

export default CardsContainer;
