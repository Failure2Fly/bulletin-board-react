import React, { useEffect, useState }  from 'react';
import Nav from "./Components/Nav";
import Bulletin from "./Components/Bulletin";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {

  const [showPost, setShowPost] = useState(false)
  const [postTitle, setPostTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  const auth = getAuth();


  useEffect(() => {
    const userCheck = () => { 

      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          // const uid = user.uid;

          setLoggedIn(true);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });

    }

    // make sure you clean up the subscription to prevent memory leaks
    return () => {
      userCheck()
    }

  }, [auth])


  console.log(loggedIn);


  return (
    <div>
      <div className="Container">
        <div className="row justify-content-center">
          <Nav setShowPost={setShowPost} setPostTitle={setPostTitle} setPosts={setPosts} loggedIn={loggedIn}/>
          <Bulletin showPost={showPost} postTitle={postTitle} setShowPost={setShowPost} posts={posts} setPosts={setPosts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
