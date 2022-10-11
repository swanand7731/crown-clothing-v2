import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBnVDuS4O7zfNZ26TG3ETHlifKfkog2U6I',
  authDomain: 'crwn-db-879b4.firebaseapp.com',
  projectId: 'crwn-db-879b4',
  storageBucket: 'crwn-db-879b4.appspot.com',
  messagingSenderId: '796606495822',
  appId: '1:796606495822:web:941e3ce6a8c3caaed5571f',
  measurementId: 'G-Q1W79HTT88',
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (e) {
      console.log('error creating the user');
    }
  }
};
