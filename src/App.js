import React, { useEffect, useState }  from 'react';
import Nav from "./Components/Nav";
import Bulletin from "./Components/Bulletin";
import './css/nav.css'
import './css/bulletin.css';
import './css/post.css';
import './css/media-queries.css';
import { getDatabase, ref, onValue, query, orderByChild, orderByKey, orderByValue, startAt, startAfter, limitToFirst, endAt, endBefore, limitToLast} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {

  const [showPost, setShowPost] = useState(false)
  const [postTitle, setPostTitle] = useState('')
  const [posts, setPosts] = useState([])
  // const [loggedIn, setLoggedIn] = useState(false)
  const [lastKey, setLastKey] = useState('')


  useEffect(() => {
    const allPosts = () => {
    // let isMounted = true
    const db = getDatabase();
    const recentPostsRef = query(ref(db, 'Posts'), orderByChild("createdAt", "desc"), limitToFirst(8));
    
      onValue(recentPostsRef, (snapshot) => {
        if (snapshot.exists()) {
          setPosts([]);
          snapshot.forEach((snap) => {
            // posts.push() here is no good, you need to do mutable updates instead of mutating the state
            // also, use the callback setState when the next state depends on the previous
            setPosts((posts) => [...posts, snap.val()])
            setLastKey(Object.keys(snapshot.val()).pop());
          })
        } else {
          console.log("No data available");
        }
      })
        
    }

    // make sure you clean up the subscription to prevent memory leaks
    return () => {
      allPosts()
      // isMounted = false
    }

  }, [setPosts])

  // console.log(Object.values(posts)[0]);
  console.log(lastKey);


  // console.log(loggedIn);


  return (
    <div>
      <div className="Container Full-Bulletin">
        <div className="row full-page">
          <Nav setShowPost={setShowPost} setPostTitle={setPostTitle} setPosts={setPosts}/>
          <Bulletin showPost={showPost} postTitle={postTitle} setShowPost={setShowPost} posts={posts} setPosts={setPosts} lastKey={lastKey} setLastKey={setLastKey}/>
        </div>
      </div>
    </div>
  );
}

export default App;
