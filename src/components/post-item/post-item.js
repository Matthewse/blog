import React from 'react';
import './post-item.css';

const PostItem = ({ title, description, text, isVisible, onToggle }) => {

   return (
      <span>
         <h2 className="post-item-title">{title}</h2>
         <p className="post-item-description">{description}</p>
         {isVisible ? <p className="post-item-text">{text}</p> : null}
         <button
            type="button"
            onClick={onToggle}>
            Read more
         </button>
      </span>
   );
};

export default PostItem;