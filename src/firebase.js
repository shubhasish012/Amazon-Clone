import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBixLhqDZuO76ywDHrB9596I9RJ-7ybIrQ",
    authDomain: "myclone-467f4.firebaseapp.com",
    projectId: "myclone-467f4",
    storageBucket: "myclone-467f4.appspot.com",
    messagingSenderId: "631813821349",
    appId: "1:631813821349:web:c734e2aa8314fe5f094e4c",
    measurementId: "G-0BYH8P3JJP"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};