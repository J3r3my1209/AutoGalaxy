// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWjE0NjTAlNM87dkuf_TFg35LlPae49hs",
  authDomain: "autogalaxy-b3098.firebaseapp.com",
  projectId: "autogalaxy-b3098",
  storageBucket: "autogalaxy-b3098.firebasestorage.app",
  messagingSenderId: "69521724680",
  appId: "1:69521724680:web:7c4eb6a4770c2b088f88bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);