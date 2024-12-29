// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; // TODO: Add SDKs for Firebase products that you want to use
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'matlogs.firebaseapp.com',
  databaseURL: 'https://matlogs-default-rtdb.firebaseio.com',
  projectId: 'matlogs',
  storageBucket: 'matlogs.firebasestorage.app',
  messagingSenderId: '636230050985',
  appId: '1:636230050985:web:c855466372efdc707975b8',
  measurementId: 'G-8QSXGT6NJL',
};

// Initialize Firebase
const config = initializeApp(firebaseConfig);
export default config;
