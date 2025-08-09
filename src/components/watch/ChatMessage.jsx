const ChatMessage = ({message}) => {
  return (
    <div className="chat-message">
      <span className="chat-user-icon">
        <img
          alt="user-icon"
          src="https://www.clipartmax.com/png/middle/170-1705271_logo-youtube-graphic-designer-computer-icons-cool-youtube-channel-logo.png"
        ></img>
      </span>
      <span className="chat-user-name">{message.name}</span>
      <span className="chat-user-message">{message.text}</span>
    </div>
  );
}

export default ChatMessage