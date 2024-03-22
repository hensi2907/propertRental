// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-property-rental.firebaseapp.com",
  projectId: "mern-property-rental",
  storageBucket: "mern-property-rental.appspot.com",
  messagingSenderId: "102639484731",
  appId: "1:102639484731:web:b258fd3021ea3062eb811e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
