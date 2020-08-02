import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqb6nju1qd2UdeluCIYmoHjPKszp8RLa8",
  authDomain: "clone-a3f57.firebaseapp.com",
  databaseURL: "https://clone-a3f57.firebaseio.com",
  projectId: "clone-a3f57",
  storageBucket: "clone-a3f57.appspot.com",
  messagingSenderId: "410596628068",
  appId: "1:410596628068:web:29f3a993be454fe684b171",
  measurementId: "G-F4GQ1Q54KK",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
