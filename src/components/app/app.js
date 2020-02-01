import React, { Component } from 'react';
import '../../assets/fonts/fonts.css';
import '../../assets/utility/base.css';
import './app.css';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

export default class App extends Component {
   id = 10;

   state = {
      posts: [
         {
            id: 1,
            title: 'Lorem ipsum',
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Nemo illum dolore nulla, officiis est, ad alias nisi porro dolores, 
            laborum laudantium? Laborum quos consectetur corrupti quam laboriosam vitae eos odio?`,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Felis eget velit aliquet sagittis. Et magnis dis parturient montes nascetur. A diam sollicitudin tempor id eu nisl nunc mi. 
            Ac turpis egestas maecenas pharetra convallis posuere. Volutpat est velit egestas dui. 
            Sollicitudin nibh sit amet commodo nulla facilisi nullam. Quis ipsum suspendisse ultrices gravida. 
            Dui id ornare arcu odio ut sem nulla pharetra diam. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. 
            Hac habitasse platea dictumst quisque sagittis purus sit amet. Sodales ut etiam sit amet. Nulla posuere sollicitudin aliquam ultrices sagittis orci.`,
            isTextVisible: false
         },
         {
            id: 2,
            title: 'Nemo illum dolore?',
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Nemo illum dolore nulla, officiis est, ad alias nisi porro dolores, 
            laborum laudantium? Laborum quos consectetur corrupti quam laboriosam vitae eos odio?`,
            text: `Eu sem integer vitae justo eget magna. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. 
            Tellus in hac habitasse platea dictumst vestibulum rhoncus. Urna molestie at elementum eu facilisis sed odio morbi. 
            Quis lectus nulla at volutpat diam ut venenatis tellus in. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. 
            Arcu non sodales neque sodales ut.`,
            isTextVisible: false
         }
      ],
      isFormVisible: false
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