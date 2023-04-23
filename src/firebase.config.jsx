import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBLicghbCz7q4_tFGMnRnwIUy255kAHtWU",
  authDomain: "house-marketplace-app-2371e.firebaseapp.com",
  projectId: "house-marketplace-app-2371e",
  storageBucket: "house-marketplace-app-2371e.appspot.com",
  messagingSenderId: "447385972255",
  appId: "1:447385972255:web:b2cd0dfcca6927967a6f2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore()