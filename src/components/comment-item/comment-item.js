import React from 'react';
import './comment-item.css';

const CommentItem = ({ name, text }) => {

   return (
      <span>
         <h3 className="comment-item__name">{name}</h3>
         <p className="comment-item__text">{text}</p>
      </span>
   );
};

export default CommentItem;