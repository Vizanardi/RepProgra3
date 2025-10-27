import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDZxWyAXn7sbRWE5O9ptAYBcDJBA5-Wz5E",
  authDomain: "c011-firebase-50233.firebaseapp.com",
  projectId: "c011-firebase-50233",
  storageBucket: "c011-firebase-50233.firebasestorage.app",
  messagingSenderId: "339798314187",
  appId: "1:339798314187:web:ac6ee3d07a0ae303bf5f4e"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()
