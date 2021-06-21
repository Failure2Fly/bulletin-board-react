import React, { useState } from 'react';
import Nav from "./Components/Nav";
import Bulletin from "./Components/Bulletin";

function App() {

  const [showPost, setShowPost] = useState(false)
  const [postTitle, setPostTitle] = useState('')
  const [posts, setPosts] = useState([])

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
