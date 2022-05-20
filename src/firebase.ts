import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyA8jb-BV_-xvNmtSBqM7bw1IHfkEFLRdvM",
    authDomain: "mario-bros-yas.firebaseapp.com",
    databaseURL: "https://mario-bros-yas.firebaseio.com",
    projectId: "mario-bros-yas",
    storageBucket: "gs://mario-bros-yas.appspot.com/",
    messagingSenderId: "173757039197",
    appId: "1:173757039197:web:1cbf1bf205e1e5f1"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);