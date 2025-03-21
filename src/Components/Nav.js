// import React, { useState } from 'react';
import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
  limitToFirst,
  query,
} from "firebase/database";
// import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
// import { firebaseDatabase, firebasePosts} from '../firebase';

// const provider = new GoogleAuthProvider();

export default function Nav({ setShowPost, setPostTitle, setPosts }) {
  // const auth = getAuth();

  // const googleLogin = () => {
  //     signInWithRedirect(auth, provider);

  //     getRedirectResult(auth)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access Google APIs.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;

  //       // The signed-in user info.
  //       const user = result.user;
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });

  // }

  const showFullPost = (title) => {
    setShowPost(true);
    setPostTitle(title);
  };

  const showAllPosts = () => {
    setPosts([]);
    const db = getDatabase();
    const recentPostsRef = query(ref(db, "Posts"));
    onValue(recentPostsRef, (snapshot) => {
      if (snapshot.exists()) {
        setPosts([]);
        snapshot.forEach((snap) => {
          // posts.push() here is no good, you need to do mutable updates instead of mutating the state
          // also, use the callback setState when the next state depends on the previous
          setPosts((posts) => [...posts, snap.val()]);
        });
      } else {
        console.log("No data available");
      }
    });
  };

  const searchForPost = (title) => {
    setPosts([]);
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Posts/${title}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((snap) => {
            // posts.push() here is no good, you need to do mutable updates instead of mutating the state
            // also, use the callback setState when the next state depends on the previous
            setPosts((posts) => [...posts, snap.val()]);
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const collapseCreatePostDropdown = () => {
    document.getElementById("collapseOne").classList.remove("show");
    document.getElementById("createPostButton").classList.add("collapsed");
  };

  const collapseSearchPostDropdown = () => {
    document.getElementById("collapseTwo").classList.remove("show");
    document.getElementById("searchPostButton").classList.add("collapsed");
  };

  // let button;

  // if (loggedIn) {
  //     button = <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  //     CREATE A POST
  //     </button>;
  //   } else {
  //     button = <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => googleLogin()}>
  //     CREATE A POST
  //     </button>;
  //   }

  return (
    <div className="col nav-full col-lg-2 ">
      <div className="row nav-header">
        <div className="col nav-header">
          <p>Bulletin Board</p>
        </div>
        <div>
          <button
            className="btn btn-outline-warning post-button"
            type="button"
            onClick={() => showAllPosts()}
          >
            DISPLAY ALL POSTS
          </button>
        </div>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              id="createPostButton"
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              CREATE A POST
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <button
              className="post-button"
              onClick={() => {
                showFullPost("LOST PET");
                collapseCreatePostDropdown();
              }}
            >
              <h5>Lost Pet</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                showFullPost("LESSONS");
                collapseCreatePostDropdown();
              }}
            >
              <h5>Lessons</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                showFullPost("CAR POOL");
                collapseCreatePostDropdown();
              }}
            >
              <h5>Car Pool</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                showFullPost("JOB POSTING");
                collapseCreatePostDropdown();
              }}
            >
              <h5>Job Posting</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                showFullPost("SHIFT COVERAGE");
                collapseCreatePostDropdown();
              }}
            >
              <h5>Shift Coverage</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                showFullPost("SELLING-WANTED");
                collapseCreatePostDropdown();
              }}
            >
              <h5>Selling-Wanted</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                showFullPost("VOLUNTEERS");
                collapseCreatePostDropdown();
              }}
            >
              <h5>Volunteers</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                showFullPost("PARTY");
                collapseCreatePostDropdown();
              }}
            >
              <h5>Party</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                showFullPost("LOOKING FOR FRIENDS");
                collapseCreatePostDropdown();
              }}
            >
              <h5>Looking For Friends</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                showFullPost("PLAY GAMES");
                collapseCreatePostDropdown();
              }}
            >
              <h5>Play Games</h5>
            </button>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              id="searchPostButton"
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              SEARCH FOR A POST
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <button
              className="post-button"
              onClick={() => {
                searchForPost("LostPet");
                collapseSearchPostDropdown();
              }}
            >
              <h5>Lost Pet</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                searchForPost("Lessons");
                collapseSearchPostDropdown();
              }}
            >
              <h5>Lessons</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                searchForPost("CarPool");
                collapseSearchPostDropdown();
              }}
            >
              <h5>Car Pool</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                searchForPost("JobPosting");
                collapseSearchPostDropdown();
              }}
            >
              <h5>Job Posting</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                searchForPost("ShiftCoverage");
                collapseSearchPostDropdown();
              }}
            >
              <h5>Shift Coverage</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                searchForPost("SellWant");
                collapseSearchPostDropdown();
              }}
            >
              <h5>Selling/Wanted</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                searchForPost("Volunteers");
                collapseSearchPostDropdown();
              }}
            >
              <h5>Volunteers</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                searchForPost("Party");
                collapseSearchPostDropdown();
              }}
            >
              <h5>Party</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                searchForPost("LookingForFriends");
                collapseSearchPostDropdown();
              }}
            >
              <h5>Looking For Friends</h5>
            </button>
            <button
              className="post-button"
              onClick={() => {
                searchForPost("PlayGames");
                collapseSearchPostDropdown();
              }}
            >
              <h5>Play Games</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
