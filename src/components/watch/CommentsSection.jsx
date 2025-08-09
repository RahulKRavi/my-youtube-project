import { COMMENTS_OBJ } from "../../utils/constants";

const Comment = ({comment})=> {
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="comment-author">{comment.name}</span>
      </div>
      <p className="comment-text">{comment.commentTxt}</p>
      
    </div>
  );
}

const CommentsSection = () => {
  const comments = COMMENTS_OBJ
  return (
    <section className="comments-container">
      <h2>Comments</h2>
      <Comment comment={comments[0]}/>
    </section>
  );
}

export default CommentsSection