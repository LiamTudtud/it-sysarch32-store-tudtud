 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
 import { getFirestore } from "firebase/firestore";
 import { getStorage } from "firebase/storage";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAMyPxRIQAbxdOI3m8KdnD1OV6cvNwvA9c",
   authDomain: "it-sysarch32-store-tudtud.firebaseapp.com",
   projectId: "it-sysarch32-store-tudtud",
   storageBucket: "it-sysarch32-store-tudtud.appspot.com",
   messagingSenderId: "144776395198",
   appId: "1:144776395198:web:d8f99e0f4bba4941ab21ef",
   measurementId: "G-KTSBCBZ758"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 export const db = getFirestore(app);
 export const storage = getStorage(app);