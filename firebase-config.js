// firebase-config.js
// Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD3uQEvD7iTT5Nyb1RQUP6bFDEsfAw_x5o",
    authDomain: "d-game-aa338.firebaseapp.com",
    projectId: "d-game-aa338",
    storageBucket: "d-game-aa338.appspot.com",
    messagingSenderId: "537592818882",
    appId: "1:537592818882:web:e9ba9c65b354e55d165f5b",
    measurementId: "G-T2VVM9FKHP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
