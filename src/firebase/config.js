import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDwnp96WhNNtpgMmKrBrrdmJgjvSaB8Dis",
    authDomain: "finacetracker-a6980.firebaseapp.com",
    projectId: "finacetracker-a6980",
    storageBucket: "finacetracker-a6980.appspot.com",
    messagingSenderId: "643879980844",
    appId: "1:643879980844:web:5a3c2b6f680d860a02e689",
    measurementId: "G-7C0HGFDWM9"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export {
    projectAuth,
    projectFirestore
}