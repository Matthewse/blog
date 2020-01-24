import React, { Component } from 'react';
import '../../assets/fonts/fonts.css';
import '../../assets/utility/base.css';
import './app.css';
import PostList from '../post-list/post-list';

export default class App extends Component {

   state = {
      posts: [
         {
            id: 1,
            title: 'Lorem ipsum',
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Nemo illum dolore nulla, officiis est, ad alias nisi porro dolores, 
            laborum laudantium? Laborum quos consectetur corrupti quam laboriosam vitae eos odio?`
         },
         {
            id: 2,
            title: 'Nemo illum dolore?',
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Nemo illum dolore nulla, officiis est, ad alias nisi porro dolores, 
            laborum laudantium? Laborum quos consectetur corrupti quam laboriosam vitae eos odio?`
         }
      ]
   }

   render() {
      const { posts } = this.state;

      return (
         <div className="blog">
            <PostList posts={posts} />
         </div>
      )
   }
}