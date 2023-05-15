// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnrQLYGBdeJSMxmQPaT180cOkxlZJwSGA",
    authDomain: "admin-panel-2b8f3.firebaseapp.com",
    projectId: "admin-panel-2b8f3",
    storageBucket: "admin-panel-2b8f3.appspot.com",
    messagingSenderId: "312679318021",
    appId: "1:312679318021:web:9b21551c13374b94c6126c",
    measurementId: "G-MZSV8GN0CT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
