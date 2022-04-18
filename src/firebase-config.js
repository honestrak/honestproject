import { initializeApp } from "firebase/app";
import { getFirestore }from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAz2BTPxn3RrwiPq8DJ_auiN7miDaKL4T0",
    authDomain: "cheval-cafe.firebaseapp.com",
    projectId: "cheval-cafe",
    storageBucket: "cheval-cafe.appspot.com",
    messagingSenderId: "72082551341",
    appId: "1:72082551341:web:8d4f55b67daf4b4a92bea4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);