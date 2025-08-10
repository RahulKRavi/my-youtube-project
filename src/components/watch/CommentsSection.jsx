import { COMMENTS_OBJ } from "../../utils/constants";

const Comment = ({comment})=> {
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="comment-author">{comment.name}</span>
      </div>
      <p className="comment-text">{comment.commentTxt}</p>
      {comment.replies.length> 0 &&
       comment.replies.map((item,index)=><Comment key={index} comment={item}/>)}
    </div>
  );
}

const CommentsSection = () => {
  const comments = COMMENTS_OBJ
  return (
    <section className="comments-container">
      <h2>Comments</h2>
      {comments.length >0 && comments.map((item,index)=> {
        return <Comment comment={item} key={index}/>
      })}
    </section>
  );
}

export default CommentsSection