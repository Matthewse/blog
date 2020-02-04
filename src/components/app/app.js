import React, { Component } from 'react';
import '../../assets/fonts/fonts.css';
import '../../assets/utility/base.css';
import './app.css';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import data from '../../assets/data/data';

export default class App extends Component {
   id = 10;

   state = {
      posts: [],
      isFormVisible: false
   }

   componentDidMount = () => this.getData()

   getData = () => {
      this.setState({
         posts: data
      })
   }

   onToggleText = id => {
      const index = this.state.posts.findIndex(post => post.id === id);
      this.setState(state => {
         const oldPost = state.posts[index];
         const newPost = { ...oldPost, isTextVisible: !oldPost.isTextVisible };
         const posts = [
            ...state.posts.slice(0, index),
            newPost,
            ...state.posts.slice(index + 1)
         ];

         return { posts };
      })
   }

   onToggleForm = () => {
      this.setState({ isFormVisible: !this.state.isFormVisible });
   }

   onAdd = (title, description, text) => {
      this.setState(state => {
         const post = this.createPost(title, description, text);
         return { posts: [...state.posts, post], isFormVisible: !this.state.isFormVisible };
      })
   }

   onDelete = id => {
      const index = this.state.posts.findIndex(post => post.id === id);
      this.setState(state => {
         const posts = [
            ...state.posts.slice(0, index),
            ...state.posts.slice(index + 1)
         ];

         return { posts };
      })
   }

   createPost = (title, description, text) => {
      return {
         id: ++this.id,
         title,
         description,
         text,
         isTextVisible: false
      };
   }

   render() {
      const { posts, isFormVisible } = this.state;

      return (
         <div className="blog">
            <h1 className="blog__main-title">Welcome to my Blog!</h1>
            <PostList
               posts={posts}
               onToggleText={this.onToggleText}
               onDelete={this.onDelete} />

            {!isFormVisible
               ? <button
                  className="open-form-button"
                  onClick={this.onToggleForm}>Сreate a new post</button>
               : <div>
                  <button
                     className="close-form-button"
                     onClick={this.onToggleForm}>Close form</button>
                  <PostAddForm onAdd={this.onAdd} />
               </div>}
         </div>
      )
   }
}