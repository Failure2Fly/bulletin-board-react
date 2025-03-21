import React from "react";
import PostComplete from "./PostComplete";
import PostForm from "./PostForm";
import {
  getDatabase,
  ref,
  onValue,
  query,
  orderByChild,
  orderByKey,
  orderByValue,
  startAt,
  startAfter,
  limitToFirst,
  endAt,
  endBefore,
  limitToLast,
} from "firebase/database";

export default function Bulletin({
  showPost,
  postTitle,
  setShowPost,
  posts,
  setPosts,
  lastKey,
  setLastKey,
}) {
  const paginationPosts = () => {
    // let isMounted = true
    const db = getDatabase();
    const recentPostsRef = query(
      ref(db, "Posts"),
      orderByChild("createdAt", "desc"),
      startAfter(lastKey),
      limitToFirst(8)
    );

    onValue(recentPostsRef, (snapshot) => {
      if (snapshot.exists()) {
        setPosts([]);
        snapshot.forEach((snap) => {
          // posts.push() here is no good, you need to do mutable updates instead of mutating the state
          // also, use the callback setState when the next state depends on the previous
          setPosts((posts) => [...posts, snap.val()]);
          setLastKey(Object.keys(snapshot.val()).pop());
        });
      } else {
        console.log("No data available");
      }
    });
  };

  return (
    <div className="bulletin col col-lg-10">
      <PostComplete
        setPosts={setPosts}
        posts={posts}
        lastKey={lastKey}
        setLastKey={setLastKey}
      />
      <PostForm
        setShowPost={setShowPost}
        showPost={showPost}
        postTitle={postTitle}
      />
      <div className="row pagination-buttons">
        <button className="btn btn-primary">Previous Page</button>
        <button className="btn btn-primary" onClick={() => paginationPosts()}>
          Next Page
        </button>
      </div>
    </div>
  );
}
