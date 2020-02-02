import React from 'react';
import './comment-item.css';

const CommentItem = ({ name, text, onDeleteComment }) => {

   return (
      <div className="comment-item__wrapper">
         <div>
            <h3 className="comment-item__name">{name}</h3>
            <p className="comment-item__text">{text}</p>
         </div>
         <div>
            <button
               type="button"
               className="comment-item__btn comment-item__btn--remove-btn"
               onClick={onDeleteComment}>Remove</button>
         </div>
      </div>
   );
};

export default CommentItem;