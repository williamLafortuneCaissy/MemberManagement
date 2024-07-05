import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDpKnqr02D880yRmRnzDUYCCJOR6qXYLWE",
    authDomain: "membermanagement-bc722.firebaseapp.com",
    projectId: "membermanagement-bc722",
    storageBucket: "membermanagement-bc722.appspot.com",
    messagingSenderId: "763501801027",
    appId: "1:763501801027:web:a203906ed7028d3dfe2ef6",
    measurementId: "G-475ZJYJ42T"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }