import { useDispatch } from "react-redux";
import { sideBarDeactive } from "../../store/toggleSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import PlayerSection from "./PlayerSection";
import LiveChatSection from "./LiveChatSection";
import CommentsSection from "./CommentsSection";


const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sideBarDeactive());
  }, []);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  return (
    <div className="container">
      <div className="video-section">
        <PlayerSection id={id} />
        <CommentsSection />
      </div>
      <LiveChatSection />
    </div>
  );
};

export default WatchPage;
