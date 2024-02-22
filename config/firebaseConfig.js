// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbRcVIJhLMzUiENoNH7PSlUJoNpsD6kpI",
  authDomain: "devchains-7bc6c.firebaseapp.com",
  projectId: "devchains-7bc6c",
  storageBucket: "devchains-7bc6c.appspot.com",
  messagingSenderId: "844895822868",
  appId: "1:844895822868:web:65f62d7976bbe57d2d3301",
  measurementId: "G-TN8DRHB94P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);