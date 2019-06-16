import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC7GtZk8GPVUHu1xQrv6fepPvIW6Q1ptmY",
    authDomain: "project-808507223458.firebaseapp.com",
    databaseURL: "https://d2bot-14a14.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { database };