import React from 'react';
import './comment-list.css';
import CommentItem from '../comment-item/comment-item';

const CommentList = ({ comments, onDeleteComment }) => {

   const items = comments.map(comment => {
      const { id, ...commentsProps } = comment;

      return (
         <li key={id} className="comment-item">
            <CommentItem
               {...commentsProps}
               onDeleteComment={() => onDeleteComment(id)}
            />
         </li>
      );
   });

   return (<ul className="comment-list">{items}</ul>);
};

export default CommentList;