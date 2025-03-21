import React from "react";
import LostPet from "./Post/Posts/LostPet";
import Lessons from "./Post/Posts/Lessons";
import CarPool from "./Post/Posts/CarPool";
import JobPosting from "./Post/Posts/JobPosting";
import ShiftCoverage from "./Post/Posts/ShiftCoverage";
import SellWant from "./Post/Posts/SellWant";
import Volunteers from "./Post/Posts/Volunteers";
import Party from "./Post/Posts/Party";
import LookingForFriends from "./Post/Posts/LookingForFriends";
import PlayGames from "./Post/Posts/PlayGames";

export default function PostForm({ showPost, postTitle, setShowPost }) {
  if (showPost && postTitle === "LOST PET") {
    return <LostPet setShowPost={setShowPost} postTitle={postTitle} />;
  }
  if (showPost && postTitle === "LESSONS") {
    return <Lessons setShowPost={setShowPost} postTitle={postTitle} />;
  }
  if (showPost && postTitle === "CAR POOL") {
    return <CarPool setShowPost={setShowPost} postTitle={postTitle} />;
  }
  if (showPost && postTitle === "JOB POSTING") {
    return <JobPosting setShowPost={setShowPost} postTitle={postTitle} />;
  }
  if (showPost && postTitle === "SHIFT COVERAGE") {
    return <ShiftCoverage setShowPost={setShowPost} postTitle={postTitle} />;
  }
  if (showPost && postTitle === "SELLING-WANTED") {
    return <SellWant setShowPost={setShowPost} postTitle={postTitle} />;
  }
  if (showPost && postTitle === "VOLUNTEERS") {
    return <Volunteers setShowPost={setShowPost} postTitle={postTitle} />;
  }
  if (showPost && postTitle === "PARTY") {
    return <Party setShowPost={setShowPost} postTitle={postTitle} />;
  }
  if (showPost && postTitle === "LOOKING FOR FRIENDS") {
    return (
      <LookingForFriends setShowPost={setShowPost} postTitle={postTitle} />
    );
  }
  if (showPost && postTitle === "PLAY GAMES") {
    return <PlayGames setShowPost={setShowPost} postTitle={postTitle} />;
  } else {
    return null;
  }
}
