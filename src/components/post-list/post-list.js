import React from 'react';
import './post-list.css';
import PostItem from '../post-item/post-item';

const PostList = ({ posts, onToggle }) => {

   const items = posts.map(post => {
      const { id, ...postProps } = post;

      return (
         <li key={id} className="post-item">
            <PostItem
               {...postProps}
               onToggle={() => onToggle(id)}
            />
         </li>
      );
   });

   return (<ul className="post-list">{items}</ul>);
};

export default PostList;