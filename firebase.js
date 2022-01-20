// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYjdPKJ-qUmiIEscNu5FxMmGuBCGu1dR0",
  authDomain: "spacestagram-f5f15.firebaseapp.com",
  projectId: "spacestagram-f5f15",
  storageBucket: "spacestagram-f5f15.appspot.com",
  messagingSenderId: "805191903279",
  appId: "1:805191903279:web:8359b27a224a5b7947feda"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const storage = getStorage();


export {app, db, storage}; 