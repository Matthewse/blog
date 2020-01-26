import React, { Fragment } from 'react';
import './post-item.css';

const PostItem = ({ title, description, text, isVisible, onToggle, onDelete }) => {

   return (
      <span>
         <h2 className="post-item__title">{title}</h2>
         <p className="post-item__description">{description}</p>
         {!isVisible
            ?
            <Fragment>
               <button
                  type="button"
                  onClick={onToggle}>
                  Read more
               </button>
            </Fragment>
            :
            <Fragment>
               <p className="post-item__text">{text}</p>
               <div className="post-item__buttons-wrapper">
                  <button
                     type="button"
                     className="post-item__btn--close-btn"
                     onClick={onToggle}>
                     Close
                  </button>
                  <div>
                     <button
                        type="button"
                        className="post-item__btn--edit-btn">
                        Edit
                     </button>
                     <button
                        type="button"
                        className="post-item__btn--remove-btn"
                        onClick={onDelete}>
                        Remove
                     </button>
                  </div>
               </div>
            </Fragment>}
      </span >
   );
};

export default PostItem;