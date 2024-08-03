// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// storage
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDAfin22taqh8TECZBPL9pCjtPuAffV3I",
  authDomain: "ijse-gdse66.firebaseapp.com",
  projectId: "ijse-gdse66",
  storageBucket: "ijse-gdse66.appspot.com",
  messagingSenderId: "544609019484",
  appId: "1:544609019484:web:487163a2ea53fd75db6899",
  measurementId: "G-FHCEFXBZW2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// storage
export const storage = getStorage(app);
