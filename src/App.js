import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './components/Post';
import config from './components/firebase/config';

function App() {
  const [posts, setPosts] = useState([
    {
      username:"mizan842",
      userImage:"https://www.southwarkgp.co.uk/wp-content/uploads/2018/03/jacques-mizan-267x300.png",
      imageLink:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.jpg",
      caption:"I would like to  see this view one day"
    },
    {
      username:"Azox",
      userImage:"https://www.southwarkgp.co.uk/wp-content/uploads/2018/03/jacques-mizan-267x300.png",
      imageLink:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.jpg",
      caption:"I would like to  see this view one day"
    },
    {
      username:"Mojox",
      userImage:"https://www.southwarkgp.co.uk/wp-content/uploads/2018/03/jacques-mizan-267x300.png",
      imageLink:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.jpg",
      caption:"I would like to  see this view one day"
    },

  ]);

  useEffect(() => {

  }, [])

  
  return (
    <div className="app">
      
      <div className="app__header">
        <img className="app__header-image" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"/>
      </div>

      {posts.map(post => (
          <Post  username={post.username} userImage={post.userImage} imageLink={post.imageLink} caption={post.caption} />
        ))
      }      
    </div>
  );
}

export default App;
