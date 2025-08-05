const SideBar = () => {
  return (
    <section className="side-bar">
      <ul className="sidebar-section">
        <li className="sidebar-item">Home</li>
        <li className="sidebar-item">Shorts</li>
        <li className="sidebar-item">Subscriptions</li>
      </ul>
      <hr className="sidebar-divider" />
      <ul className="sidebar-section">
        <li className="sidebar-item">History</li>
        <li className="sidebar-item">Playlists</li>
        <li className="sidebar-item">Your Videos</li>
        <li className="sidebar-item">Your Movies</li>
        <li className="sidebar-item">Watch Later</li>
        <li className="sidebar-item">Liked Videos</li>
        <li className="sidebar-item">Downloads</li>
      </ul>
      <hr className="sidebar-divider" />
      <ul className="sidebar-section">
        <li className="sidebar-item">Shopping</li>
        <li className="sidebar-item">Music</li>
        <li className="sidebar-item">Movies</li>
        <li className="sidebar-item">Live</li>
        <li className="sidebar-item">Gaming</li>
        <li className="sidebar-item">News</li>
        <li className="sidebar-item">Sports</li>
      </ul>
    </section>
  );
};

export default SideBar;
