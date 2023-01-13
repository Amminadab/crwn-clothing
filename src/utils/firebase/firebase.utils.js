import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzumG6z359LL--VwRcYR4gRp7iLyUpkJI",
  authDomain: "crwn-clothing-db-f7a7b.firebaseapp.com",
  projectId: "crwn-clothing-db-f7a7b",
  storageBucket: "crwn-clothing-db-f7a7b.appspot.com",
  messagingSenderId: "711343419798",
  appId: "1:711343419798:web:ebf62fdce7b460ffee6db7",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};
///
