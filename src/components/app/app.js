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
         const { posts } = state;
         posts[index].isVisible = !posts[index].isVisible;

         return posts;
      })
   }

   render() {
      const { posts } = this.state;

      return (
         <div className="blog">
            <PostList
               posts={posts}
               onToggle={this.onToggle} />
         </div>
      )
   }
}