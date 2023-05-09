import React, { useState, useEffect } from 'react';
import { onValue } from 'firebase/database';
// import { doc, getDocs } from "firebase/firestore";
import {firebasePosts} from './firebase.js';
import Nav from "./Components/Nav";
import Bulletin from "./Components/Bulletin";

function App() {

  const [showPost, setShowPost] = useState(false)
  const [postTitle, setPostTitle] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const callPosts = () => {
      onValue(firebasePosts, (snapshot) => {
        snapshot.forEach((snap) => {
          // posts.push() here is no good, you need to do mutable updates instead of mutating the state
          // also, use the callback setState when the next state depends on the previous
          setPosts((posts) => [...posts, snap.val()])
        })
        // console.log(info);
        // setPosts((posts) => [...posts, info]);
      });
    }

    // make sure you clean up the subscription to prevent memory leaks
    return () => {
      callPosts()
    }

  }, [])


  return (
      <div>
        <div className="Container">
          <div className="row justify-content-center">
              <Nav setShowPost={setShowPost} setPostTitle={setPostTitle} setPosts={setPosts}/>
              <Bulletin showPost={showPost} postTitle={postTitle} setShowPost={setShowPost} posts={posts} setPosts={setPosts}/>
          </div>
        </div>
      </div>
  );
}

export default App;
