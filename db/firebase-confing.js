// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlcIF4DJxUg1xFLEoS0eDDTGigbiCeiLE",
  authDomain: "ecomerse-gonzalez-ricardo.firebaseapp.com",
  projectId: "ecomerse-gonzalez-ricardo",
  storageBucket: "ecomerse-gonzalez-ricardo.appspot.com",
  messagingSenderId: "202850294242",
  appId: "1:202850294242:web:f4c6092a50e0e48a9fc1bb"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
//-----------------------------------------------
export const auth = getAuth(app);


export const db = getFirestore(app);