import React from 'react';
import PostComplete from "./PostComplete";
import PostForm from "./PostForm";

export default function Bulletin({showPost, postTitle, setShowPost, posts, setPosts}){

    return (
        <div className="bulletin col col-lg-10">
            <PostComplete setPosts={setPosts} posts={posts}/>
            <PostForm setShowPost={setShowPost} showPost={showPost} postTitle={postTitle}/>
        </div>
    )

}
