import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAclGXeiOu7M1n738l_g2Na1Snmw1Woyu8",
  authDomain: "signupandlogin-1e4fb.firebaseapp.com",
  projectId: "signupandlogin-1e4fb",
  storageBucket: "signupandlogin-1e4fb.appspot.com",
  messagingSenderId: "576350829115",
  appId: "1:576350829115:web:7829908c2a1dc7975c7a1e",
  measurementId: "G-HJ633W4MNT"
};


firebase.initializeApp(firebaseConfig);

export default firebase;