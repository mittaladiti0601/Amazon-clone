import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHjXVe21BVkRTMbHP42NTQADgcmmsPFnM",
    authDomain: "clone-303b4.firebaseapp.com",
    projectId: "clone-303b4",
    storageBucket: "clone-303b4.appspot.com",
    messagingSenderId: "199567335822",
    appId: "1:199567335822:web:3ad9d17d9e689ecb97c4df",
    measurementId: "G-SMBWM3680R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };