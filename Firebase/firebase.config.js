// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDzI_ms1V0jPKx-RS1dTyj9GFSO_VmfrKs",
   authDomain: "news-71-f8a9f.firebaseapp.com",
   projectId: "news-71-f8a9f",
   storageBucket: "news-71-f8a9f.appspot.com",
   messagingSenderId: "158631206391",
   appId: "1:158631206391:web:597779f0c1cae6a52ea2f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app