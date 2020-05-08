import "firebase/firestore";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics"



let firebaseConfig = {
    apiKey: "AIzaSyDAP5RZJ0h3JgLCVmN-GRG_C2A9MjG2Q9s",
    authDomain: "capstoneproject-eb89a.firebaseapp.com",
    databaseURL: "https://capstoneproject-eb89a.firebaseio.com",
    projectId: "capstoneproject-eb89a",
    storageBucket: "capstoneproject-eb89a.appspot.com",
    messagingSenderId: "803118349396",
    appId: "1:803118349396:web:6c9582c3d800d1fe3241c1",
    measurementId: "G-EL8THQ2G5P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth()
export const firestore = firebase.firestore();