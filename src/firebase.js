import firebase from 'firebase'
require('firebase/auth')

var firebaseConfig = {
    apiKey: "AIzaSyDyE9bjCkevu29zPivwes6BDQJADdpXpbw",
    authDomain: "finalyearproject-3ef74.firebaseapp.com",
    projectId: "finalyearproject-3ef74",
    storageBucket: "finalyearproject-3ef74.appspot.com",
    messagingSenderId: "960171713958",
    appId: "1:960171713958:web:5de67c4f6251186c971b67",
    measurementId: "G-F9H6315L3Y"
 
};

const db = firebase.initializeApp(firebaseConfig);

export {db};