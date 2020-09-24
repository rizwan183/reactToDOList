// const firebaseConfig ={


// }

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
{
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCzD3RjTU4NrlabkaCQEVWT_jj3d8vpGkM",
    authDomain: "todo-2521e.firebaseapp.com",
    databaseURL: "https://todo-2521e.firebaseio.com",
    projectId: "todo-2521e",
    storageBucket: "todo-2521e.appspot.com",
    messagingSenderId: "468634718965",
    appId: "1:468634718965:web:b81c1b62c9e8d3830febbc",
    measurementId: "G-FESC944E94"
}
);

const db= firebaseApp.firestore();

export default db;
