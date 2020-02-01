import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {

   state = {
      title: '',
      description: '',
      text: '',
      error: ''
   }

   validate = () => {
      if (!this.state.title || !this.state.description || !this.state.text) {
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
         const { title, description, text } = this.state;
         this.props.onAdd(title, description, text);
         this.setState({ title: '', description: '', text: '', error: '' });
      }
   };

   render() {
      const { title, description, text, error } = this.state;

      return (
         <form
            className="form"
            onSubmit={this.onSubmit}>
            <div className="form__item">
               <label className="form__label">Title</label>
               <input
                  className="form__input form__input-title"
                  value={title}
                  onChange={event => this.onChange(event, "title")}></input>
            </div>
            <div className="form__item">
               <label className="form__label">Description</label>
               <textarea
                  className="form__input form__input-description"
                  value={description}
                  onChange={event => this.onChange(event, "description")}></textarea>
            </div>
            <div className="form__item">
               <label className="form__label">Text</label>
               <textarea
                  className="form__input form__input-text"
                  value={text}
                  onChange={event => this.onChange(event, "text")}></textarea>
            </div>
            <div className="form__item-error-wrapper">
               <div className="form__item-error-message">{error}</div>
               <button
                  className="form__button"
                  type="submit">Add post</button>
            </div>
         </form>
      );
   }
}