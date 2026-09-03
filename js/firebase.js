import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAxs7fyzZK5cOc6mBTo0C0u6PlcGi_wm54",
    authDomain: "blueprint-tech.firebaseapp.com",
    projectId: "blueprint-tech",
    storageBucket: "blueprint-tech.firebasestorage.app",
    messagingSenderId: "303740381328",
    appId: "1:303740381328:web:13f13e245ab062ceb65015"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);


export { db, auth };
