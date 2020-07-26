import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3kD-54MxJSNverUqktqn1LxIrtAp9BWQ",
  authDomain: "instagram-clone-9206f.firebaseapp.com",
  databaseURL: "https://instagram-clone-9206f.firebaseio.com",
  projectId: "instagram-clone-9206f",
  storageBucket: "instagram-clone-9206f.appspot.com",
  messagingSenderId: "949489988911",
  appId: "1:949489988911:web:56720fd736c0cbd4565dda",
  measurementId: "G-WVXM75M1YY",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
