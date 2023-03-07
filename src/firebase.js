// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfO8Bj9n4Aotl-w_47HUJIMwgLBiu9wSY",
  authDomain: "netflix-2-clone-5f49c.firebaseapp.com",
  projectId: "netflix-2-clone-5f49c",
  storageBucket: "netflix-2-clone-5f49c.appspot.com",
  messagingSenderId: "1019418998640",
  appId: "1:1019418998640:web:f6fe9adb5ea0ecd5b301b5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
