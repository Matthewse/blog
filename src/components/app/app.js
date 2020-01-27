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
            isVisible: false
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
            isVisible: false
         }
      ]
   }

   onToggle = id => {
      const index = this.state.posts.findIndex(post => post.id === id);
      this.setState(state => {
         const oldPost = state.posts[index];
         const newPost = { ...oldPost, isVisible: !oldPost.isVisible };
         const posts = [
            ...state.posts.slice(0, index),
            newPost,
            ...state.posts.slice(index + 1)
         ];

         return { posts };
      })
   }

   onAdd = (title, description, text) => {
      this.setState((state) => {
         const post = this.createPost(title, description, text);
         return { posts: [...state.posts, post] };
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
         isVisible: false
      };
   }

   render() {
      const { posts } = this.state;

      return (
         <div className="blog">
            <PostList
               posts={posts}
               onToggle={this.onToggle}
               onDelete={this.onDelete} />

            <PostAddForm
               onAdd={this.onAdd} />
         </div>
      )
   }
}