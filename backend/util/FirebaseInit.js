// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVRtEPo-FBgLnoLnFe3K_UZni5Zq8lQ8A",
  authDomain: "fullstack-deliverable.firebaseapp.com",
  databaseURL: "https://fullstack-deliverable-default-rtdb.firebaseio.com",
  projectId: "fullstack-deliverable",
  storageBucket: "fullstack-deliverable.appspot.com",
  messagingSenderId: "693127932395",
  appId: "1:693127932395:web:1346c6af466f62a29451ae",
  measurementId: "G-FVFSS8R1B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};