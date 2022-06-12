import { getApps, getApp, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDGBIn84LDgulBnmnzmzqIFsumh8_6QApU",
    authDomain: "restaurant-app-14e33.firebaseapp.com",
    databaseURL: "https://restaurant-app-14e33-default-rtdb.firebaseio.com",
    projectId: "restaurant-app-14e33",
    storageBucket: "restaurant-app-14e33.appspot.com",
    messagingSenderId: "1087451652831",
    appId: "1:1087451652831:web:7860c7f38daa0fa8da3f6a"
};

const app =getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, db, firestore, storage };