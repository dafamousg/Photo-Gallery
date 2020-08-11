import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCJOoIoomVz2adfiiWAeJyYXQZePcx3CUU",
  authDomain: "ginogram-f7916.firebaseapp.com",
  databaseURL: "https://ginogram-f7916.firebaseio.com",
  projectId: "ginogram-f7916",
  storageBucket: "ginogram-f7916.appspot.com",
  messagingSenderId: "398222626725",
  appId: "1:398222626725:web:5e3c6f529193671e6ea24c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};
