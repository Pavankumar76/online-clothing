import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";

import { getDoc, getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMYotyIc-ZWdYvUgp0vGeK-ROwew7NfRc",
  authDomain: "online-clothing-db.firebaseapp.com",
  projectId: "online-clothing-db",
  storageBucket: "online-clothing-db.appspot.com",
  messagingSenderId: "618532849743",
  appId: "1:618532849743:web:32ebc8eb711d7ddfd4823a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

       try{
            await setDoc(userDocRef, {
                displayName,email,createdAt
            });
        }
        catch(error){
            console.log('error creating the user',error.message);
        }
    }
    return userDocRef;
}