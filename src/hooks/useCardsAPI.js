import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {sideBarActivate} from '../store/toggleSlice'

const useCardsAPI = (YOUTUBE_API) => {
  const [videos,setVideos] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(sideBarActivate());
    getFetchedData();
  }, []);

 const getFetchedData = async ()=> {
   const data = await fetch(YOUTUBE_API);
   const jsonData = await data.json();
   setVideos(jsonData.items)
 }

 return videos
}

export default useCardsAPI