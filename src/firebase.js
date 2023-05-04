// import firebase from 'firebase/app';
// import 'firebase/app';
// import 'firebase/database';
// import 'firebase/firebase-firestore';

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from "firebase/database";

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

// firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseDatabase = getDatabase(app);
// const firebaseDatabase = firebaseDatabase.ref();
const firebasePosts = ref(firebaseDatabase, 'Posts');
const firebaseLostPet = ref(firebaseDatabase,'Posts/LostPet');
const firebaseLessons = ref(firebaseDatabase, 'Posts/Lessons');
const firebaseCarPool = ref(firebaseDatabase, 'Posts/CarPool');
const firebaseJobPosting = ref(firebaseDatabase, 'Posts/JobPosting');
const firebaseShiftCoverage = ref(firebaseDatabase, 'Posts/ShiftCoverage');
const firebaseSellWant = ref(firebaseDatabase, 'Posts/SellWant');
const firebaseVolunteers = ref(firebaseDatabase, 'Posts/Volunteers');
const firebaseParty = ref(firebaseDatabase, 'Posts/Party');
const firebaseLookingForFriends = ref(firebaseDatabase, 'Posts/LookingForFriends');
const firebasePlayGames = ref(firebaseDatabase, 'Posts/PlayGames');


// firebase.initializeApp({
//     apiKey: "AIzaSyAmpToiuEuTst_1ZTOarqpvjDEbsl2vulo",
//     authDomain: "bulletin-board-a367a.firebaseapp.com",
//     projectId: "bulletin-board-a367a"
// });
  

export {
    app, 
    // analytics,
    firebaseDatabase,
    firebasePosts,
    firebaseLostPet,
    firebaseLessons,
    firebaseCarPool,
    firebaseJobPosting,
    firebaseShiftCoverage,
    firebaseSellWant,
    firebaseVolunteers,
    firebaseParty,
    firebaseLookingForFriends,
    firebasePlayGames
}

