// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore-compat.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgwQdyTwgHAb3PxcUow9TlgH17lUyKoUw",
  authDomain: "nova-iris-connect.firebaseapp.com",
  projectId: "nova-iris-connect",
  storageBucket: "nova-iris-connect.appspot.com",
  messagingSenderId: "631173315787",
  appId: "1:631173315787:web:cab68c64b65511a5c0ef4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and make it globally accessible
const db = getFirestore(app);
window.db = db;
