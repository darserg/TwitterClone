// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdFJjBUyXJGsKEKdBzkztaxGaCXav9dzg",
  authDomain: "twitter-clone-b199f.firebaseapp.com",
  databaseURL: "https://twitter-clone-b199f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "twitter-clone-b199f",
  storageBucket: "twitter-clone-b199f.appspot.com",
  messagingSenderId: "1079241134230",
  appId: "1:1079241134230:web:2bef735e17873eb34b32b7",
  measurementId: "G-7DL087GBYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);