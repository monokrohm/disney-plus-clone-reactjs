import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

//import {getFirestore} from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics"; 

const firebaseConfig = {
  apiKey: "AIzaSyDGkAnPmVNfZVt2DTf_Vj8lVmuM2D5RUoI",
  authDomain: "disneyplus-clone-7fd6c.firebaseapp.com",
  projectId: "disneyplus-clone-7fd6c",
  storageBucket: "disneyplus-clone-7fd6c.appspot.com",
  messagingSenderId: "362042144914",
  appId: "1:362042144914:web:0d966d3242fab335220e4b",
  measurementId: "G-3376GDJF6C",
  databaseURL: "https://disneyplus-clone-7fd6c-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage, signInWithPopup};
export default db;
