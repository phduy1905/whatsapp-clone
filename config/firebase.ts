// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByPIqO-cv8WB7qzuKOzlzc3CcXMN5SlQQ",
  authDomain: "whatsapp-clone-b5b8d.firebaseapp.com",
  projectId: "whatsapp-clone-b5b8d",
  storageBucket: "whatsapp-clone-b5b8d.appspot.com",
  messagingSenderId: "602165073327",
  appId: "1:602165073327:web:90660457949ab727fa0b5a",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { app, db, auth, provider };
