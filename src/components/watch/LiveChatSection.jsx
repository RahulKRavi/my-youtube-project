import { useDispatch, useSelector } from "react-redux"
import ChatMessage from "./ChatMessage"
import store from "../../store/store"
import { useEffect } from "react"
import { addMessage } from "../../store/liveChatSlice"
import { generateRandomMessage, generateRandomName } from "../../utils/chatGenerator"
// import ChatMessage from "./ChatMessage"


const LiveChatSection = () => {
  const messages = useSelector(store=> store.liveChat.messages)
  const dispatch = useDispatch()
  console.log(messages)
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

  </section>)
}

export default LiveChatSection