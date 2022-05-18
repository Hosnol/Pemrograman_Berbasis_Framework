import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbtodmnZkM75OVh3dSZyeO31DcHTHxbdo",
    authDomain: "praktikum11-22061.firebaseapp.com",
    projectId: "praktikum11-22061",
    storageBucket: "praktikum11-22061.appspot.com",
    messagingSenderId: "467971696268",
    appId: "1:467971696268:web:963d4d9e14755910967da9",
    measurementId: "G-N9C9Z12VS2"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;