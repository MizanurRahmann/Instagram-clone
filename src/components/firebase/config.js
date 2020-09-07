import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlKacX6f8mfBkCt9SVRvDhKyhw8F3C9DY",
    authDomain: "instagram-clone-b1cfd.firebaseapp.com",
    databaseURL: "https://instagram-clone-b1cfd.firebaseio.com",
    projectId: "instagram-clone-b1cfd",
    storageBucket: "instagram-clone-b1cfd.appspot.com",
    messagingSenderId: "161246243169",
    appId: "1:161246243169:web:81fbd65195c96329eabd20",
    measurementId: "G-7Z6JWYSKZY"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }