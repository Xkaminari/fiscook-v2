
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCTCbbYkhPYFubtN-XaJV9U_vSm6Ht-KXc",
    authDomain: "fiskcook-890d5.firebaseapp.com",
    projectId: "fiskcook-890d5",
    storageBucket: "fiskcook-890d5.appspot.com",
    messagingSenderId: "704036266164",
    appId: "1:704036266164:web:56ce7e4b69d42d6adc77e1"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage}