import Card from "./VideoCard";
import { YOUTUBE_API } from "../../utils/constants";
import { Link } from "react-router-dom";
import useCardsAPI from "../../hooks/useCardsAPI";

const VideoGrid = () => {

  const videos = useCardsAPI(YOUTUBE_API)

  if(videos.length !==0) return (
    <section className="cards-container">
      {videos.map((item)=>{
        return <Link to={'/watch?v='+item.id} key={item.id}><Card  item={item}/></Link>
      })}
    </section>
  );
};

export default VideoGrid;
