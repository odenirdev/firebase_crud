import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWzjmwQ-9d6pzJlj91dbJ9LuPUijGnTUM",
  authDomain: "fir-crud-8c978.firebaseapp.com",
  databaseURL: "https://fir-crud-8c978-default-rtdb.firebaseio.com",
  projectId: "fir-crud-8c978",
  storageBucket: "fir-crud-8c978.appspot.com",
  messagingSenderId: "183938598992",
  appId: "1:183938598992:web:5e0b49308163088b1f2955",
};

firebase.default.initializeApp(firebaseConfig);

export default firebase.default.database().ref();
