import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB6H-YtTy5EhiwqMJThvlr8TJs7DC4nD54",
    authDomain: "clone-de225.firebaseapp.com",
    projectId: "clone-de225",
    storageBucket: "clone-de225.appspot.com",
    messagingSenderId: "246347236464",
    appId: "1:246347236464:web:ce7bcca2d3de382b2660b5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore(); 
const auth = firebaseApp.auth(); 

export {db, auth} 