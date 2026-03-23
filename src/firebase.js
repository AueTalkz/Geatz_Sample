import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIe6Yi3e65vNM0GExevzfoQ8C7h55bXzs",
  authDomain: "geatzgroupz.firebaseapp.com",
  projectId: "geatzgroupz",
  storageBucket: "geatzgroupz.firebasestorage.app",
  messagingSenderId: "648800349930",
  appId: "1:648800349930:web:8f7b61233a337f03397193",
  measurementId: "G-E40V5PH34K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);