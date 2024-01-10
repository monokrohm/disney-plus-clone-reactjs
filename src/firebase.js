import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {getFirestore, collection, doc, getDocs, getDoc} from "firebase/firestore";
import { getStorage } from "firebase/storage";
//import { getDatabase } from "firebase/database";
//import { getAnalytics } from "firebase/analytics"; 

const firebaseConfig = {
  apiKey: "AIzaSyDGkAnPmVNfZVt2DTf_Vj8lVmuM2D5RUoI",
  authDomain: "disneyplus-clone-7fd6c.firebaseapp.com",
  databaseURL: "https://disneyplus-clone-7fd6c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "disneyplus-clone-7fd6c",
  storageBucket: "disneyplus-clone-7fd6c.appspot.com",
  messagingSenderId: "362042144914",
  appId: "1:362042144914:web:0d966d3242fab335220e4b",
  measurementId: "G-3376GDJF6C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, collection, doc, getDocs, getDoc, signInWithPopup};
export default db;
