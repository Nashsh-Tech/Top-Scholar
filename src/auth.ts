import './styles/index.css';
import AUTH1 from './assets/auth-1.svg';
import AUTH2 from './assets/google-icon.svg';


import {auth,db}  from "./js/firebaseconfig";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, setPersistence, browserLocalPersistence, User } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const auth1 = document.getElementById('auth1') as HTMLImageElement;
const auth2 = document.getElementById('auth2') as HTMLImageElement;
const googleSignInBtn = document.getElementById('googleSignIn') as HTMLButtonElement;


auth1.src = AUTH1;
auth2.src = AUTH2;


const bootUp = () => {
    console.log("$dEvZuVeEe:= System Booting Up....");
    console.log("$dEvZuVeEe:= System Online....");
    console.log("$dEvZuVeEe:= System Begin Initialing....");
};
bootUp();



// Ensure auth persistence (keeps users logged in)
setPersistence(auth, browserLocalPersistence).catch((error) => {
    console.error("Error setting persistence:", error);
});



googleSignInBtn.addEventListener('click' , async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      if (user) {
        // Check if user exists in Firestore
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
  
        if (!userSnap.exists()) {
          // Store new user data in Firestore
          await setDoc(userRef, {
            uid: user.uid,
            displayName: user.displayName || "Unknown",
            email: user.email || "No email",
            contact: user.phoneNumber || "No contact",
            createdAt: new Date().toISOString(),
          });
        }
  
        window.location.href = "./dashboard.html"; // Redirect on success
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    } 
});