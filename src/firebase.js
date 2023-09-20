import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDenJFHFEadvuXkAe35TWtkvF0vMJZ2i4I",
    authDomain: "fir-puc-4efef.firebaseapp.com",
    projectId: "fir-puc-4efef",
    storageBucket: "fir-puc-4efef.appspot.com",
    messagingSenderId: "455452066035",
    appId: "1:455452066035:web:90669676a5647c3f2af786"
};

firebase.initializeApp(firebaseConfig);

export default firebase;