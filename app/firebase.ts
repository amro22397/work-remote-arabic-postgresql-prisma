// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAthIqoGnvxHcyI9iA8Zji1cH_-0nbM3QU",
  authDomain: "remote-work-f06dd.firebaseapp.com",
  projectId: "remote-work-f06dd",
  storageBucket: "remote-work-f06dd.firebasestorage.app",
  messagingSenderId: "859816027537",
  appId: "1:859816027537:web:fa153fb203f9e968c8a630",
  measurementId: "G-QPYRW85KK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app)