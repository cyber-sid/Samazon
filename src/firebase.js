// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr0PVP9bZ0Q33VGKpgzxUW8by2bkM1oZI",
  authDomain: "clone-569d5.firebaseapp.com",
  projectId: "clone-569d5",
  storageBucket: "clone-569d5.appspot.com",
  messagingSenderId: "522007698974",
  appId: "1:522007698974:web:e3a82516b2cb8a4d11d80f",
  measurementId: "G-FNL7VF3DF5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const authenticate = firebase.auth();

export { db, authenticate };

//https://clone-569d5.web.app
