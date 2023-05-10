
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyClRj5eki_7_aYQtS0ETQTr_A0VMoZUZqw",
  authDomain: "backendreactjs-a4c1c.firebaseapp.com",
  projectId: "backendreactjs-a4c1c",
  storageBucket: "backendreactjs-a4c1c.appspot.com",
  messagingSenderId: "1092136504846",
  appId: "1:1092136504846:web:dc9e8418887c5a195d765f"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)