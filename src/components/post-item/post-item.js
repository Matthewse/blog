import React from 'react';
import './post-item.css';

const PostItem = props => {

   return (
      <span>
         <h2 className="item-title">{props.title}</h2>
         <p className="item-description">{props.description}</p>
         <p className="item-text">{props.text}</p>
      </span>
   );

};

export default PostItem;