import React, { useState, useEffect } from 'react';
import { getDatabase, ref, child, get} from "firebase/database";
import Nav from "./Components/Nav";
import Bulletin from "./Components/Bulletin";

function App() {

  const [showPost, setShowPost] = useState(false)
  const [postTitle, setPostTitle] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const allPosts = () => {
      setPosts([]);
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Posts`)).then((snapshot) => {
          if (snapshot.exists()) {
              snapshot.forEach((snap) => {
                  // posts.push() here is no good, you need to do mutable updates instead of mutating the state
                  // also, use the callback setState when the next state depends on the previous
                  setPosts((posts) => [...posts, snap.val()])
                })
          } else {
              console.log("No data available");
          }
      }).catch((error) => {
          console.error(error);
      });
  }

    // make sure you clean up the subscription to prevent memory leaks
    return () => {
      allPosts()
    }

  }, [setPosts])


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
