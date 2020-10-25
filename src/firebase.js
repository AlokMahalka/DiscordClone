import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDb43iMUeSOhCE6BH36EdKO0GXa2fKm7Gg",
    authDomain: "discordclonealok.firebaseapp.com",
    databaseURL: "https://discordclonealok.firebaseio.com",
    projectId: "discordclonealok",
    storageBucket: "discordclonealok.appspot.com",
    messagingSenderId: "1025701141179",
    appId: "1:1025701141179:web:7f911b41adfb88956fe79e",
    measurementId: "G-2P20TMT6KW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export { auth , provider };
export default db;