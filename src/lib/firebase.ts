// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCqkRVW0ewovNu3jnQ_yMTj6Es3uI1_HlI",
  authDomain: "react-typescript-firebase-demo.firebaseapp.com",
  projectId: "react-typescript-firebase-demo",
  storageBucket: "react-typescript-firebase-demo.appspot.com",
  messagingSenderId: "269502465154",
  appId: "1:269502465154:web:64410325f3ef4560b6609b",
  measurementId: "G-N17T1FHFW3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);