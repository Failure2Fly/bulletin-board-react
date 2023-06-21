import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// const firebase = require("firebase");
// require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAmpToiuEuTst_1ZTOarqpvjDEbsl2vulo",
    authDomain: "bulletin-board-a367a.firebaseapp.com",
    databaseURL: "https://bulletin-board-a367a.firebaseio.com",
    projectId: "bulletin-board-a367a",
    storageBucket: "bulletin-board-a367a.appspot.com",
    messagingSenderId: "395892185912",
    appId: "1:395892185912:web:82d385e5c1b13a8c9f7fcd",
    measurementId: "G-54P5QC4PL8"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

const firebaseAllPosts = collection(db, 'AllPosts');
const firebasePosts = collection(db, 'Posts');
// const firebaseLostPet = collection(db,'Posts/LostPet');
// const firebaseLessons = collection(db, 'Posts/Lessons');
// const firebaseCarPool = collection(db, 'Posts/CarPool');
// const firebaseJobPosting = collection(db, 'Posts/JobPosting');
// const firebaseShiftCoverage = collection(db, 'Posts/ShiftCoverage');
// const firebaseSellWant = collection(db, 'Posts/SellWant');
// const firebaseVolunteers = collection(db, 'Posts/Volunteers');
// const firebaseParty = collection(db, 'Posts/Party');
// const firebaseLookingForFriends = collection(db, 'Posts/LookingForFriends');
// const firebasePlayGames = collection(db, 'Posts/PlayGames');


  

export {
    app, 
    db,
    firebaseAllPosts,
    firebasePosts
    // firebaseLostPet,
    // firebaseLessons,
    // firebaseCarPool,
    // firebaseJobPosting,
    // firebaseShiftCoverage,
    // firebaseSellWant,
    // firebaseVolunteers,
    // firebaseParty,
    // firebaseLookingForFriends,
    // firebasePlayGames
}

