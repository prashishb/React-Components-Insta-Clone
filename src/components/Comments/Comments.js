import React from 'react';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(elem => <Comment comment={elem} key={elem.id} />)}
      <div class="comment-wrapper">
        <FontAwesomeIcon icon={faSmile} class="smile-icon" />
        <input type='text' class="comment-box" placeholder="Add a comment"></input>
        <button class="comment-btn">post</button>
      </div>
    </div>
  );
};

export default Comments;
