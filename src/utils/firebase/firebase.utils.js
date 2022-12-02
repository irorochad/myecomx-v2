import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLVgrT_KG9g3IRCIQhTedTtxtw0NdNbfY",
  authDomain: "ecomx-db.firebaseapp.com",
  projectId: "ecomx-db",
  storageBucket: "ecomx-db.appspot.com",
  messagingSenderId: "893901676315",
  appId: "1:893901676315:web:bff56a0b5155fee5d03dbe",
};

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  aditionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // If the snapshot, or the user does not exists, create one
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...aditionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign in the user with Email and Password

export const emailAndPasswordSignIn = async (email, password) => {
  // If the user didn't pass any email and password, kill the script.
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
