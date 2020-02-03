import React from 'react';
import './comment-item.css';

const CommentItem = ({ name, text, currentDate, onDeleteComment }) => {

   return (
      <div className="comment-item__wrapper">
         <div>
            <h3 className="comment-item__name">{name}</h3>
            <p className="comment-item__text">{text}</p>
         </div>
         <div className="comment-item__right-side-wrapper">
            <p className="comment-item__current-date">{currentDate}</p>
            <button
               type="button"
               className="comment-item__btn comment-item__btn--remove-btn"
               onClick={onDeleteComment}>Remove</button>
         </div>
      </div>
   );
};

export default CommentItem;