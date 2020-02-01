import React, { Component } from 'react';
import './comment-add-form.css';

export default class CommentAddForm extends Component {

   state = {
      name: '',
      text: '',
      error: ''
   }

   validate = () => {
      if (!this.state.name || !this.state.text) {
         this.setState({ error: 'Fields cannot be empty' });
         return false
      }

      return true;
   }

   onChange = (event, field) => {
      this.setState({
         [field]: event.target.value,
      });
   }

   onSubmit = event => {
      event.preventDefault();

      const isValid = this.validate();
      if (isValid) {
         const { name, text } = this.state;
         this.props.onAddComment(name, text);
         this.setState({ name: '', text: '', error: '' });
      }
   };

   render() {
      const { name, text, error } = this.state;

      return (
         <form
            className="comment-form"
            onSubmit={this.onSubmit}>
            <div className="comment-form__item">
               <input
                  className="comment-form__input comment-form__input-name"
                  value={name}
                  placeholder={"Name"}
                  onChange={event => this.onChange(event, "name")}></input>
            </div>
            <div className="comment-form__item">
               <textarea
                  className="comment-form__input comment-form__input-text"
                  value={text}
                  placeholder={"Text"}
                  onChange={event => this.onChange(event, "text")}></textarea>
            </div>
            <div className="comment-form__item-error-wrapper">
               <div className="comment-form__item-error-message">{error}</div>
               <button
                  className="form__button form__button--comment-btn"
                  type="submit">Add comment</button>
            </div>
         </form>
      );
   }
}