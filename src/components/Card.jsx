const Card = ({item}) => {
  const {snippet,statistics} = item
  const views = Math.floor((statistics.viewCount)/1000)
  return (
    <div className="card">
      <img
        className="thumbnail"
        alt="video thumbnail"
        src={snippet?.thumbnails?.medium?.url}
      />
      <div className="details-container">
        <img
          className="channel-logo"
          alt="channel logo"
          src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/61995/optimized_product_thumb_stage.jpg"
        />
        <div className="video-info">
          <p className="video-title">{snippet.title}</p>
          <p className="channel-name">{snippet.channelTitle}</p>
          <p className="video-stats">
            <span>{views}K views</span> • <span>2 months ago</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
