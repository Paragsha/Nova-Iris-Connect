// Initialize Firebase using compat SDK
const firebaseConfig = {
  apiKey: "AIzaSyCgwQdyTwgHAb3PxcUow9TlgH17lUyKoUw",
  authDomain: "nova-iris-connect.firebaseapp.com",
  projectId: "nova-iris-connect",
  storageBucket: "nova-iris-connect.appspot.com",
  messagingSenderId: "631173315787",
  appId: "1:631173315787:web:cab68c64b65511a5c0ef4e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
