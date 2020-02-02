import React, { Component, Fragment } from 'react';
import './post-item.css';
import Comments from '../comments/comments';

export default class PostItem extends Component {

   state = {
      comments: []
   }

   onAddComment = (name, text) => {
      this.setState(state => {
         const comment = this.createComment(name, text);
         return { comments: [...state.comments, comment] };
      })
   }

   onDeleteComment = id => {
      const index = this.state.comments.findIndex(comment => comment.id === id);
      this.setState(state => {
         const comments = [
            ...state.comments.slice(0, index),
            ...state.comments.slice(index + 1)
         ];

         return { comments };
      })
   }

   createComment = (name, text) => {
      return {
         id: Math.random(),
         name,
         text
      };
   }

   render() {
      return (
         <div>
            <h2 className="post-item__title">{this.props.title}</h2>
            <p className="post-item__description">{this.props.description}</p>
            {!this.props.isTextVisible
               ?
               <button
                  type="button"
                  className="post-item__btn post-item__btn--read-more"
                  onClick={this.props.onToggleText}>Read more</button>
               :
               <Fragment>
                  <p className="post-item__text">{this.props.text}</p>
                  <Comments
                     onAddComment={this.onAddComment}
                     onDeleteComment={this.onDeleteComment}
                     comments={this.state.comments}/>
                  <div className="post-item__buttons-wrapper">
                     <button
                        type="button"
                        className="post-item__btn post-item__btn--close-btn"
                        onClick={this.props.onToggleText}>Close</button>
                     <div>
                        <button
                           type="button"
                           className="post-item__btn post-item__btn--remove-btn"
                           onClick={this.props.onDelete}>Remove post</button>
                     </div>
                  </div>
               </Fragment>}
         </div>
      );
   }
}