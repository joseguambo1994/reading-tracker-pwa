import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUbOXdSzt8LHvdqym3oYwMhHvJfJw-qsw",
  authDomain: "bookreaderlogger.firebaseapp.com",
  projectId: "bookreaderlogger",
  storageBucket: "bookreaderlogger.appspot.com",
  messagingSenderId: "867259163927",
  appId: "1:867259163927:web:d1608effe8383f8b4ec352"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);


