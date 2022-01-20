import React from 'react';
import Post from './Post'

const posts = [
    {
        id: '123',
        username: '_.shivambajaj._',
        userImg: 'https://i.imgur.com/NdGgm6o.jpeg',
        img: 'https://links.papareact.com/3ke',
        caption: "I am coder pro max",
    },

      {
        id: '123',
        username: '_.shivambajaj._',
        userImg: 'https://i.imgur.com/NdGgm6o.jpeg',
        img: 'https://links.papareact.com/3ke',
        caption: "I am coder pro max",
    },

      {
        id: '123',
        username: '_.shivambajaj._',
        userImg: 'https://i.imgur.com/NdGgm6o.jpeg',
        img: 'https://links.papareact.com/3ke',
        caption: "I am coder pro max",
    },
]

function Posts() {
  return (
  <div>

      {posts.map((post) => (
          <Post key={post.id}
          id = {post.id}
          username ={post.username}
          userImg = {post.userImg}
          img = {post.img}
          caption = {post.caption}

          />

      ))}
  </div>
    
    
    
    );
}

export default Posts;
