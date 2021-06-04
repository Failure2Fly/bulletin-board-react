import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/firebase-firestore';

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

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const firebaseDatabase = firebase.database();
const firebasePosts = firebaseDatabase.ref('Posts');
const firebaseLostPet = firebaseDatabase.ref('Posts/LostPet');
const firebaseLessons = firebaseDatabase.ref('Posts/Lessons');
const firebaseCarPool = firebaseDatabase.ref('Posts/CarPool');
const firebaseJobPosting = firebaseDatabase.ref('Posts/JobPosting');
const firebaseShiftCoverage = firebaseDatabase.ref('Posts/ShiftCoverage');
const firebaseSellWant = firebaseDatabase.ref('Posts/SellWant');
const firebaseVolunteers = firebaseDatabase.ref('Posts/Volunteers');
const firebaseParty = firebaseDatabase.ref('Posts/Party');
const firebaseLookingForFriends = firebaseDatabase.ref('Posts/LookingForFriends');
const firebasePlayGames = firebaseDatabase.ref('Posts/PlayGames');


// firebase.initializeApp({
//     apiKey: "AIzaSyAmpToiuEuTst_1ZTOarqpvjDEbsl2vulo",
//     authDomain: "bulletin-board-a367a.firebaseapp.com",
//     projectId: "bulletin-board-a367a"
// });
  

export {
    firebase,
    db,
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

