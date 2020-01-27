import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {

   state = {
      title: '',
      description: '',
      text: ''
   }

   onSubmit = e => {
      e.preventDefault();
      const { title, description, text } = this.state;
      this.props.onAdd(title, description, text);
      this.setState({ title: '', description: '', text: '' });
   };

   render() {
      return (
         <form
            className="form"
            onSubmit={this.onSubmit}>
            <p className="form__item">
               <label className="form__label">Title</label>
               <textarea
                  className="form__input-text"
                  value={this.state.title}
                  onChange={e => { this.setState({ title: e.target.value }) }}></textarea></p>
            <p className="form__item">
               <label className="form__label">Description</label>
               <textarea
                  className="form__input-text"
                  value={this.state.description}
                  onChange={e => { this.setState({ description: e.target.value }) }}></textarea></p>
            <p className="form__item">
               <label className="form__label">Text</label>
               <textarea
                  className="form__input-text"
                  value={this.state.text}
                  onChange={e => { this.setState({ text: e.target.value }) }}></textarea></p>
            <button
               className="form__button"
               type="submit">Add</button>
         </form>
      );
   }
}