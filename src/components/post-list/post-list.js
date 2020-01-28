import React from 'react';
import './post-list.css';
import PostItem from '../post-item/post-item';

const PostList = ({ posts, onToggleText, onDelete }) => {

   const items = posts.map(post => {
      const { id, ...postProps } = post;

      return (
         <li key={id} className="post-item">
            <PostItem
               {...postProps}
               onToggleText={() => onToggleText(id)}
               onDelete={() => onDelete(id)}
            />
         </li>
      );
   });

   return (<ul className="post-list">{items}</ul>);
};

export default PostList;