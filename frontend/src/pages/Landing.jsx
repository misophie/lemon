import Button from "@mui/material/Button";

export const Landing = () => {
  return (
    <div>
      <Button variant="contained">Landing</Button>
    </div>
  );
};


// Firebase import testing
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore, collection, getDocs, doc
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq3HI0yJ3oTy1cwF_vUHxZTt8bLgrSfag",
  authDomain: "youcode-fe126.firebaseapp.com",
  databaseURL: "https://youcode-fe126-default-rtdb.firebaseio.com",
  projectId: "youcode-fe126",
  storageBucket: "youcode-fe126.appspot.com",
  messagingSenderId: "919136939004",
  appId: "1:919136939004:web:530edfc5d642560b52e079",
  measurementId: "G-QJQ56DV6EW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const colRef = collection(db, 'groups')

getDocs(colRef)
  .then((snapshot) => {
    let output = []
    console.log(snapshot.docs)
    snapshot.docs.forEach((doc) => {
      output.push({... doc.data()})
    })
    console.log(output)
  })