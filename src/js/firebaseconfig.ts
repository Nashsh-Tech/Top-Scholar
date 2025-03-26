import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBT3Tv61JTaCr5pdU4ijDfl5EimSwa-UWM",
    authDomain: "topscholar-ci.firebaseapp.com",
    projectId: "topscholar-ci",
    storageBucket: "topscholar-ci.firebasestorage.app",
    messagingSenderId: "701073712754",
    appId: "1:701073712754:web:a4df8c5cd629ba07ad04eb",
    measurementId: "G-22WZK7PMHQ"
};

const app = initializeApp(firebaseConfig);
 
export const auth = getAuth(app);
export const db = getFirestore(app);

export default auth;