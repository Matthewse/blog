import React, { Fragment } from 'react';
import './post-item.css';

const PostItem = ({ title, description, text, isTextVisible, onToggleText, onDelete }) => {

   return (
      <span>
         <h2 className="post-item__title">{title}</h2>
         <p className="post-item__description">{description}</p>
         {!isTextVisible
            ?
            <button
               type="button"
               onClick={onToggleText}>Read more</button>
            :
            <Fragment>
               <p className="post-item__text">{text}</p>
               <div className="post-item__buttons-wrapper">
                  <button
                     type="button"
                     className="post-item__btn--close-btn"
                     onClick={onToggleText}>Close</button>
                  <div>
                     <button
                        type="button"
                        className="post-item__btn--edit-btn">Edit</button>
                     <button
                        type="button"
                        className="post-item__btn--remove-btn"
                        onClick={onDelete}>Remove</button>
                  </div>
               </div>
            </Fragment>}
      </span>
   );
};

export default PostItem;