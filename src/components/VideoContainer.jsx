import { useDispatch } from "react-redux";
import { sideBarDeactive } from "../utils/toggleSlice";
import { useSearchParams } from "react-router-dom";

const VideoContainer = () => {
  const dispatch = useDispatch();
  dispatch(sideBarDeactive());
  const [searchParams] = useSearchParams()
  const id = searchParams.get('v')

  return (
    <section>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+id+"?si=sDbs22D6Aq_vGrNb"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default VideoContainer;
