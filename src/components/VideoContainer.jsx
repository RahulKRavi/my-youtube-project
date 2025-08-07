import { useDispatch } from "react-redux";
import { sideBarDeactive } from "../store/toggleSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const VideoContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sideBarDeactive());
  }, []);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  return (
    <section>
      <iframe
        width="880"
        height="485"
        src={"https://www.youtube.com/embed/" + id + "?si=sDbs22D6Aq_vGrNb"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default VideoContainer;
