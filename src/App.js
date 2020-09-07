import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './components/Post';
import { db } from './components/firebase/config';
import Signup from './components/auth/Signup';


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    //Every time our database is updated this part is fired
    db.collection('Posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })
      ));
    })

  }, [])


  return (
    <div className="app">

      <div className="app__header">
        <img className="app__header-image" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />
      </div>

    <Signup />
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          imageLink={post.imageLink}
          caption={post.caption} />
      ))
      }
    </div>
  );
}

export default App;
