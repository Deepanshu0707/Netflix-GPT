// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSkidK7sDj97SXjwu6GZUCRc9mjoBZf0Q",
  authDomain: "netflixgpt-8d0bf.firebaseapp.com",
  projectId: "netflixgpt-8d0bf",
  storageBucket: "netflixgpt-8d0bf.appspot.com",
  messagingSenderId: "309181269017",
  appId: "1:309181269017:web:aba427d008a94993515688",
  measurementId: "G-BZ62P45RG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();

export default app;