import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAaia2hXXWC8u7XO5umX2hL_2hpdj7bw3Y",
    authDomain: "stoicplan.firebaseapp.com",
    databaseURL: "https://stoicplan.firebaseio.com",
    projectId: "stoicplan",
    storageBucket: "stoicplan.appspot.com",
    messagingSenderId: "864712692559"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;