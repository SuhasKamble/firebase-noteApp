import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFwX8qPx8VtldIOmOw0N41omiN8GCpcGI",
    authDomain: "notes-app-111a2.firebaseapp.com",
    databaseURL: "https://notes-app-111a2.firebaseio.com",
    projectId: "notes-app-111a2",
    storageBucket: "notes-app-111a2.appspot.com",
    messagingSenderId: "460219855671",
    appId: "1:460219855671:web:1674cd5a0677c067d220b2",
    measurementId: "G-X98Y0KMDRF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  export default db;