import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPSgo1a__7VUvO91lf59UAThBQ6QFHJX0",
  authDomain: "netflix-clone-fb7b7.firebaseapp.com",
  projectId: "netflix-clone-fb7b7",
  storageBucket: "netflix-clone-fb7b7.appspot.com",
  messagingSenderId: "1022648880434",
  appId: "1:1022648880434:web:476febf0b9bea1250adb2b",
  measurementId: "G-898EN6EWMG"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);