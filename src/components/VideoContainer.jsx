import { useDispatch } from "react-redux";
import { sideBarDeactive } from "../store/toggleSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Comments from "./Comments";
import Chat from "./Chat";
import Video from "./Video";

const VideoContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sideBarDeactive());
  }, []);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  return (
    <div class="container">
      <div class="video-section">
        <Video id={id} />
        <Comments />
      </div>
      <Chat />
    </div>
  );
};

export default VideoContainer;
