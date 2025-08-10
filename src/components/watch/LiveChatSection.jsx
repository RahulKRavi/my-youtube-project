import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { addMessage } from "../../store/liveChatSlice"
import { generateRandomMessage, generateRandomName } from "../../utils/chatGenerator"
// import ChatMessage from "./ChatMessage"

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

const LiveChatSection = () => {
  const messages = useSelector(store=> store.liveChat.messages)
  const [commentWritten,setCommentWritten] = useState('')
  const dispatch = useDispatch()
  const handleComment = (commentWritten)=> {
    dispatch(addMessage({
      name: "Rahul",
      text: commentWritten
    }))
  }
  useEffect(()=>{
    const i = setInterval(()=>{
      dispatch(addMessage({
        name: generateRandomName(),
        text: generateRandomMessage(20)
      }))
    },2000)
    return ()=>clearInterval(i)
  },[])
  if(messages.lengtht === 0) return null;
  return (
  <section className="live-chat-section">
    {messages.map((item,index)=>(
      <ChatMessage message={item} key={index}/>
    ))}
  <input type='text' value={commentWritten} onChange={(e)=>setCommentWritten(e.target.value)}></input>
  <button onClick={()=>handleComment(commentWritten)}>Send</button>
  </section>)
}

export default LiveChatSection