const Video = ({id}) => {
  return (
    <section className="video-only">
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
}

export default Video