// Import compat versions to work with your current HTML form setup
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgwQdyTwgHAb3PxcUow9TlgH17lUyKoUw",
  authDomain: "nova-iris-connect.firebaseapp.com",
  projectId: "nova-iris-connect",
  storageBucket: "nova-iris-connect.appspot.com", // FIXED: .app → .app**spot.com**
  messagingSenderId: "631173315787",
  appId: "1:631173315787:web:cab68c64b65511a5c0ef4e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firestore and Storage for use
const db = firebase.firestore();
const storage = firebase.storage();

window.db = db;
window.storage = storage;
