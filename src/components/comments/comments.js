import React, { Component } from 'react';
import './comments.css';
import CommentAddForm from '../comment-add-form/comment-add-form';
import CommentList from '../comment-list/comment-list';

export default class Comments extends Component {

   render() {

      return (
         <div>
            <CommentList
               comments={this.props.comments}
               onDeleteComment={this.props.onDeleteComment} />
            <CommentAddForm onAddComment={this.props.onAddComment} />
         </div>
      );
   }
};