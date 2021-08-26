import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqokNwzbuPoEVxq29-sbh1fllUTfInZMk",
  authDomain: "facebook-messenger-dad61.firebaseapp.com",
  projectId: "facebook-messenger-dad61",
  storageBucket: "facebook-messenger-dad61.appspot.com",
  messagingSenderId: "890733374409",
  appId: "1:890733374409:web:cbaaab80423e46ce499618",
  measurementId: "G-3L8LJC6YMD",
});

const db = firebaseApp.firestore();

export default db;
