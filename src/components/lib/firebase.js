// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-4f3ec.firebaseapp.com",
  projectId: "chat-4f3ec",
  storageBucket: "chat-4f3ec.appspot.com",
  messagingSenderId: "70490383654",
  appId: "1:70490383654:web:d8d3b485e385ebd03e4de7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()