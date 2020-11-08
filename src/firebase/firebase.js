import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAE84BrItXBh9p7AGovGndt3e6UU81_va4",
  authDomain: "instagram-clone-react-5ecdb.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-5ecdb.firebaseio.com",
  projectId: "instagram-clone-react-5ecdb",
  storageBucket: "instagram-clone-react-5ecdb.appspot.com",
  messagingSenderId: "212263567905",
  appId: "1:212263567905:web:4f4bd895e25c70dd8a1960",
  measurementId: "G-K3MNZX1XT6",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
