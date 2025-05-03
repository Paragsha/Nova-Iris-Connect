// firebase.js

// Import Firebase SDKs (compat version)
firebase.initializeApp({
  apiKey: "AIzaSyCgwQdyTwgHAb3PxcUow9TlgH17lUyKoUw",
  authDomain: "nova-iris-connect.firebaseapp.com",
  projectId: "nova-iris-connect",
  storageBucket: "nova-iris-connect.appspot.com", // FIXED ".app" to ".com"
  messagingSenderId: "631173315787",
  appId: "1:631173315787:web:cab68c64b65511a5c0ef4e"
});

// Initialize Firestore
const db = firebase.firestore();

// Make db available globally
window.db = db;
