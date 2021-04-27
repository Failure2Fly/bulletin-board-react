import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';


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

const firebaseDatabase = firebase.database();
const firebasePosts = firebaseDatabase.ref('Posts');


export {
    firebase,
    firebaseDatabase,
    firebasePosts
}

