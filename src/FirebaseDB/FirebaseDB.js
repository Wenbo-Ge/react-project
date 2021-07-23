import firebase from "firebase/app";
import "firebase/firestore";

// firebase configuration setup
var firebaseConfig = {
    apiKey: "AIzaSyCGkvmcE2WSGe3VKN_N96P3b5eApj9O08g",
    authDomain: "pattern-coordinates.firebaseapp.com",
    projectId: "pattern-coordinates",
    storageBucket: "pattern-coordinates.appspot.com",
    messagingSenderId: "293694421535",
    appId: "1:293694421535:web:9831f778960d8f1316b32a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const convertCollectionsSnapshotToMap = (collections) => {
  let transformedCollection = [];
  collections.docs.forEach((doc) => transformedCollection.push(doc.data()));
  return transformedCollection;
};

export default firebase;