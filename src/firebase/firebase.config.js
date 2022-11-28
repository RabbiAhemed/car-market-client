// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  apiKey: "AIzaSyAD42h-IOllyoUa-5IAKyoE0ogUDspmkm8",
  authDomain: "resale-zone-4ff53.firebaseapp.com",
  projectId: "resale-zone-4ff53",
  storageBucket: "resale-zone-4ff53.appspot.com",
  messagingSenderId: "401093006107",
  appId: "1:401093006107:web:09e758eefb8639197879be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
